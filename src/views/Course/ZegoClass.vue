<template>
	<div id="app"></div>
</template>

<script>
import { ZegoRoomKit } from '../../plugins/zegoroomkit_edu_web/ZegoRoomKit'
export default {
	methods: {
		init: async function(){
			const zg = new ZegoRoomKit();
			//初始化配置信息
			zg.init({
				secretID: 2000049
			})
				//console.log(zg.deviceID())
				const res = await zg.inRoomService().joinRoomWithConfig({
					userID: 12532,
					userName: 'cq',
					roomID: '501790068',
					token: this.$store.state.roomkit.sdk_token,
					role: 2,
					productID: 1511,
				},'app')
			


			
			
		}
	},
	mounted: function(){
		this.init();
	}
}
</script>