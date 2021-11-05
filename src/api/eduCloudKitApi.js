import axios from 'axios'

// 错误状态码 有返回错误直接进行操作
//const errorStatus = [401, 500, 502, 504]

axios.defaults.timeout = 15000;


export default {
	createClass: async function(params){
		return new Promise ((resolve, reject) => {
			axios.post('/eduCloud/room/create',params).then( res => {
				resolve(res.data);
			}).catch( err => {
				console.log(err);
				reject(err);
			})
		})
	},

	getClassList: async function(params){
		return new Promise ((resolve, reject) => {
			axios.post('/eduCloud/room/query',params).then( res => {
				resolve(res.data);
			}).catch( err => {
				console.log(err);
				reject(err);
			})
		})
	}
}
