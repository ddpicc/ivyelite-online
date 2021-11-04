import axios from 'axios'

// 错误状态码 有返回错误直接进行操作
//const errorStatus = [401, 500, 502, 504]

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
	createCourse: async function(subject,room_type,begin_timestamp,duration,product_id,host,attendees,secret_id,sdk_token){
		const createClassResult = await post('/eduCloud/room/create', {
			subject: subject,
			room_type: room_type,
			begin_timestamp: begin_timestamp,
			duration: duration,
			product_id: product_id,
			host: host,
			attendees: attendees,
			secret_id: secret_id,
			sdk_token: sdk_token
		})
		return createClassResult.data;
	}
}
