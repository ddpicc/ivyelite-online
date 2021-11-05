import axios from 'axios'
import md5 from 'md5'
import { ZegoRoomKit } from '../plugins/zegoroomkit_edu_web/ZegoRoomKit.js'
import store from '../store'


const SecretID = 2000049;
const SecretSign = '206f1ebfc3b60590c3113c907e61f721178bd07b5a569a6df195bdcf42f05a04';
const ProductID = 1511;


axios.defaults.timeout = 15000;


export default {
	getSDKToken: function(){
		const timestamp = Math.floor(new Date().getTime() / 1000) + 3600 * 24;
		const deviceId = ZegoRoomKit.deviceID();
		const verifyType = 3;
		const version = 1;
		const signStr = `${SecretSign.substr(0, 32)}${deviceId}${verifyType}${version}${timestamp}`;
		const sign = md5(signStr);
		return new Promise ((resolve, reject) => {
			axios.post('/roomkit/auth/get_sdk_token',{
				common_data: {
					platform: 32,
				},
				sign: sign,
				secret_id: SecretID,
				device_id: deviceId,
				timestamp: timestamp,
			}).then( res => {
				console.log('ZegoRoomKit get sdk token');
				store.dispatch('roomkit/SetSdkTokenToVuex', res.data.data.sdk_token);
				resolve(res.data);
			}).catch( err => {
				console.log(err);
				reject(err);
			})
		})
	},

	getDeviceId: function(){
		return ZegoRoomKit.deviceID();
	}
}
