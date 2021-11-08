<template>
	<div id="app"></div>
</template>

<script>
import { ZegoRoomKit } from '../../plugins/zegoroomkit_edu_web/ZegoRoomKit'
import classRoomApi from '../../api/classRoomApi'
const zg;
export default {
	data: () => ({
		urlParams: null,

	}),

	methods: {
		init: function(){			
			// 快速加入时的摄像头麦克风设置 默认true
			const mic = this.urlParams.get('m') === '1' ? false : true;
			const camera = this.urlParams.get('c') === '1' ? false : true;
			// 自定义标题
			const title = this.urlParams.get('title');
			// 隐藏主持人结束房间按钮
			const isEndRoomButtonHidden = 
				this.urlParams.get('isEndRoomButtonHidden') ===	'true' ? true : false;
			// 隐藏房间人数
			const isMemberCountHidden = 
				this.urlParams.get('isMemberCountHidden') ===	'true' ? true : false;
			// 隐藏设备检测流程
			const isMemberEquipmentInspectionHidden =
				this.urlParams.get('isMemberEquipmentInspectionHidden') === 'true' ? true : false;
			// 隐藏进房消息
			const isMemberJoinRoomMessageHidden = 
				urlParams.get('isMemberJoinRoomMessageHidden') === 'true' ? true : false;
			// 隐藏退房消息
			const isMemberLeaveRoomMessageHidden = 
				urlParams.get('isMemberLeaveRoomMessageHidden') ===	'true' ? true : false;
			const isVideoViewAutoHidden =
					urlParams.get('isVideoViewAutoHidden') === 'true' ? true : false;
			// 隐藏企业云盘文件
			const isCompanyFilesHidden = 
				urlParams.get('isCompanyFilesHidden') === 'true' ? true : false;
			// 是否固定展示进退房消息
			const isFixedInOutMessage =
				urlParams.get('isFixedInOutMessage') === 'true' ? true : false;
			// 是否开启笔锋
			const enableHandwriting = urlParams.get('enableHandwriting') === 'true' ? true : false;
			zg.roomSettings().setIsMicrophoneOnWhenJoiningRoom(mic);
			zg.roomSettings().setIsCameraOnWhenJoiningRoom(camera);
		},

		joinRoom: async function(){

		},

		getSDKToken: function(){
			if (this.$cookies.getItem(`sdkToken-${userId}`)) {
      	resolve(this.$cookies.getItem(`sdkToken-${userId}`));
    	}
			const device_id = ZegoRoomKit.deviceID();
			return new Promise ((resolve, reject) => {
				classRoomApi.getSDKToken(device_id).then( res => {
					if(res.data.code === 200){
						cookies.setItem(
								`sdkToken-${userId}`,
								res.data.data.sdkToken,
								new Date(new Date().getTime() + (res.data.data.expiresIn - 60 * 60 * 3) * 1000),
						);
						resolve(res.data.data.sdkToken);
					}else{
						reject(res.data.ret.message);
					}
				})
			})
		},
	},

	mounted: function(){
		this.init();
	},

	created() {
		this.urlParams = this.$route.query
		const zg = new ZegoRoomKit();
		//初始化配置信息
		zg.init({
			secretID: process.env.VUE_APP_ROOMKIT_SECRETID
		})
	},
	
}
</script>