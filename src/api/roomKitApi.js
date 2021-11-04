import axios from 'axios'
import md5 from 'md5'
import { ZegoRoomKit } from '../plugins/zegoroomkit_edu_web/ZegoRoomKit.js'

const SecretID = 2000049;
const SecretSign = '206f1ebfc3b60590c3113c907e61f721178bd07b5a569a6df195bdcf42f05a04';
const ProductID = 1511;

axios.defaults.timeout = 15000;

function get (url,data) {
  return axios({
    method: 'GET',
    url,
    params: data
  })
};

function post (url, data) {
	return axios({
		method: 'POST',
		url,
		data
	})
};

export default {
	getSDKToken: async function(){
		const timestamp = Math.floor(new Date().getTime() / 1000) + 3600 * 24;
		const deviceId = ZegoRoomKit.deviceID();
		const verifyType = 3;
		const version = 1;
		const signStr = `${SecretSign.substr(0, 32)}${deviceId}${verifyType}${version}${timestamp}`;
		const sign = md5(signStr);
		const res = await post('roomkit/auth/get_sdk_token',{
			common_data: {
				platform: 32,
			},
			sign: sign,
			secret_id: SecretID,
			device_id: deviceId,
			timestamp: timestamp,
		});
		console.log(res);
		return res.data.data.sdk_token;
	}
}
