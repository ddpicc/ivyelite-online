import api from './axiosConfig'

// login模块相关接口
export default {
  login: (email, password) => api.post(`/userApi/signin`, { email, password}),
  getInfo: (uid) => api.get(`/userApi/getinfo`, {uid}),
  signUp: (email, password) => api.post(`/userApi/signup`, { email, password})
}
