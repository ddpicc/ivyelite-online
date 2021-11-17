import axios from 'axios'
import Cookies from 'js-cookie'
//import router from '../router'

let baseURL = 'http://localhost:3000'
// 错误状态码 有返回错误直接进行操作
//const errorStatus = [401, 500, 502, 504]



axios.defaults.withCredentials = true
// 中间件 拦截请求
axios.interceptors.request.use(config => {
  const token = Cookies.get('ivyelite-token');
	if(token){
		config.headers.Authorization = 'Bearer ' + token;
	}
	return config;
})

axios.interceptors.response.use(res => {
  // 请求成功对响应数据做处理
  if(res.data.code == 401){
    console.log('affff')
    window.location.href='/login'
    return res;
  }else{
    return res
  }
  // 该返回的数据则是axios.then(res)中接收的数据  
}, err => {
  // 在请求错误时要做的事儿
  switch(err.response.status){
    // 对得到的状态码的处理，具体的设置视自己的情况而定
    case 401:
      console.log('未登录')
      window.location.href='/'
      break
    case 404:
      window.location.href='/'
      break
    case 405:
      console.log('不支持的方法')
      break
    // case ...
    default:
      console.log('其他错误')
      break
  }
  // 该返回的数据则是axios.catch(err)中接收的数据
  return err
})

// 导出axios配置组件
export default {
  get (url,data) {
    url = `${baseURL}${url}`
    return axios({
      method: 'GET',
      url,
      params: data
    })
  },
  post (url, data) {
    url = `${baseURL}${url}`
    return axios({
      method: 'POST',
      url,
      data
    })
  },
  delete (url,data) {
    url = `${baseURL}${url}`
    return axios({
      method: 'DELETE',
      url,
      params: data
    })
  },
  all (arr) {
    return Promise.all(arr)
  }
}
