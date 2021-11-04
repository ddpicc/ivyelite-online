import axios from 'axios'
import Cookies from 'js-cookie'
//import router from '../router'

let baseURL
// 错误状态码 有返回错误直接进行操作
//const errorStatus = [401, 500, 502, 504]


if (window.location.hostname.indexOf('localhost') > -1) {
  // 本地调试用url
  baseURL = 'http://localhost:3000'
} else {
  // 线上url
  baseURL = 'http://' + window.location.hostname
}

axios.defaults.withCredentials = true
axios.defaults.baseURL = baseURL
// 中间件 拦截请求
axios.interceptors.request.use(config => {
  const token = Cookies.get('ivyelite-token');
	if(token){
		config.headers.Authorization = 'Bearer ' + token;
	}
	return config;
})

// 导出axios配置组件
export default {
  get (url,data) {
    return axios({
      method: 'GET',
      url,
      params: data
    })
  },
  post (url, data) {
    return axios({
      method: 'POST',
      url,
      data
    })
  },
  all (arr) {
    return Promise.all(arr)
  }
}
