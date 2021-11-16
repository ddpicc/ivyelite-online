<template>
	<div id="app"></div>
</template>

<script>
import { ZegoRoomKit } from '../../../public/ZegoRoomKit'
import classRoomApi from '../../api/classRoomApi'
export default {
	data: () => ({
		urlParams: null,

	}),

	methods: {
		init: function(){
			const zg = new ZegoRoomKit();
			//初始化配置信息
			zg.init({
				secretID: Number(process.env.VUE_APP_ROOMKIT_SECRETID)
			})
			// 快速加入时的摄像头麦克风设置 默认trueß
			const mic = this.urlParams.mic === '1' ? false : true;
			const camera = this.urlParams.camera === '1' ? false : true;
			// 自定义标题
			const title = this.urlParams.title;
			// 隐藏主持人结束房间按钮
			const isEndRoomButtonHidden = 
				this.urlParams.isEndRoomButtonHidden ===	'true' ? true : false;
			// 隐藏房间人数
			const isMemberCountHidden = 
				this.urlParams.isMemberCountHidden ===	'true' ? true : false;
			// 隐藏设备检测流程
			const isMemberEquipmentInspectionHidden =
				this.urlParams.isMemberEquipmentInspectionHidden === 'true' ? true : false;
			// 隐藏进房消息
			const isMemberJoinRoomMessageHidden = 
				this.urlParams.isMemberJoinRoomMessageHidden === 'true' ? true : false;
			// 隐藏退房消息
			const isMemberLeaveRoomMessageHidden = 
				this.urlParams.isMemberLeaveRoomMessageHidden ===	'true' ? true : false;
			const isVideoViewAutoHidden =
				this.urlParams.isVideoViewAutoHidden === 'true' ? true : false;
			// 隐藏企业云盘文件
			const isCompanyFilesHidden = 
				this.urlParams.isCompanyFilesHidden === 'true' ? true : false;
			// 是否固定展示进退房消息
			const isFixedInOutMessage =
				this.urlParams.isFixedInOutMessage === 'true' ? true : false;
			// 是否开启笔锋
			const enableHandwriting = this.urlParams.enableHandwriting === 'true' ? true : false;
			const uiConfig = {
				isEndRoomButtonHidden,
				isMemberCountHidden,
				isMemberEquipmentInspectionHidden,
				isMemberJoinRoomMessageHidden,
				isMemberLeaveRoomMessageHidden,
				isVideoViewAutoHidden,
				isCompanyFilesHidden,
				isFixedInOutMessage,
				enableHandwriting
			}
			zg.roomSettings().setIsMicrophoneOnWhenJoiningRoom(mic);
			zg.roomSettings().setIsCameraOnWhenJoiningRoom(camera);
			this.joinRoom(zg, title, uiConfig)
		},

		joinRoom: async function(zg, title, uiConfig){
			try {
				const userId = this.$store.state.user.uid;
				const token = await this.getSDKToken(userId);
				let info = null;
				const beginTimestamp = this.urlParams.beginTimestamp
				const roomType = Number(this.urlParams.roomType);
				info = await classRoomApi.getClassInfoFromEduCloud(this.urlParams.room_id);
				if (info && roomType !== info.data.room_type) {
						// 房间类型不同时房间标题置空 房间标题应从房间内中获取 
						info.data.subject = ''
				}
				zg.inRoomService().setUserParameter({
						avatarUrl: 'https://img2.baidu.com/it/u=325567737,3478266281&fm=26&fmt=auto&gp=0.jpg',
						customIconUrl: 'http://www.gov.cn/guoqing/site1/20100928/001aa04acfdf0e0bfb6401.gif',
				})
				zg.inRoomService().setRoomParameter({
						subject: title || (info && info.data.subject),
						beginTimestamp: (beginTimestamp && Number(beginTimestamp)) || info.data && info.data.beginTimestamp,
						// hostNickname: 'wwww'
				})
				zg.inRoomService().setUIConfig(uiConfig)

				zg.setAdvancedConfig({
						domain: 'https://roomkit-api.zego.im',
				})

				const res = await zg.inRoomService().joinRoomWithConfig({
						userID: Number(this.$store.state.user.uid),
						userName: this.$store.state.user.name,
						roomID: this.urlParams.room_id,
						token: token,
						role: Number(this.urlParams.role),
						productID: Number(process.env.VUE_APP_ROOMKIT_PRODUCTID),
				}, 'app')
      } catch (err) {
				// 加入课堂失败
				if (err.error === 4020009) {
						//toast.error('房间助教已满')
				} else if (err.error === 4020008) {
						//toast.error('房间学生已满')
				} else if (err.error === 4020010) {
						//toast.error('老师已存在')
				} else {
					console.log('errrrrrrr')
						//toast.error(lang.room_join_failed + ':' + err.error) // 加入房间失败
				}

				setTimeout(() => {
						window.history.back()
				}, 3000)
				throw err;
			}

			// 监听结束房间事件
			zg.on('endRoom', () => {
					console.log('------endRoom-------')
			})
			// 监听离开房间事件
			zg.on('leaveRoom', () => {
					console.log('------leaveRoom-------')
					window.location.replace('./login.html');
			})
			// 监听被踢出房间事件
			zg.on('kickedOutOfRoom', () => {
					console.log('------kickedOutOfRoom-------')
					// window.history.back()
					// window.location.replace('about:blank');
					window.location.replace('./login.html');
			})
			zg.on('receiveCustomMessage', (data) => {
					console.log('data', data);
			})
			zg.on('messageEventNotify', (event, messageInfo) => {
					console.log('messageEventNotify', event, messageInfo);
			})
			zg.on('capturedAudioData', (data, dataLength) => {
					// console.log('pcm',dataLength)
			})
		},

		getSDKToken: function(userId){
			const device_id = ZegoRoomKit.deviceID();
			return new Promise ((resolve, reject) => {
				if (this.$Cookies.get(`sdkToken-${userId}`)) {
					resolve(this.$Cookies.get(`sdkToken-${userId}`));
				}else{
					classRoomApi.getSDKToken(device_id).then( res => {
						if(res.data.code === 200){
							this.$Cookies.set(
									`sdkToken-${userId}`,
									res.data.data.sdk_token,
									new Date(new Date().getTime() + (res.data.data.expires_in - 60 * 60 * 3) * 1000),
							);
							resolve(res.data.data.sdk_token);
						}else{
							reject(res.data.ret.message);
						}
					})
				}				
			})
		},
	},

	mounted: function(){
		//alert(this.urlParams.room)
		this.init();

		
	},

	created() {
		this.urlParams = this.$route.query
	},
	
}
</script>