import api from './axiosConfig'

// login模块相关接口
export default {
  login: (email, password) => api.post(`/userApi/signin`, { email, password}),
  getInfo: (uid) => api.get(`/userApi/getinfo`, {uid}),
  signUp: (email, password) => api.post(`/userApi/signup`, { email, password}),
  updateUserName: (name, uid) => api.post(`/userApi/updateUserName`, {name, uid}),
  updateUserProfile: (name, sex, education, school, birth, area, uid) => api.post(`/userApi/updateUserProfile`, {name, sex, education, school, birth, area, uid}),
  findDataCountByUid: (uid) => api.get(`/userApi/findDataCountByUid`, {uid}),
  insertUser: (email, password, uid) => api.post(`/userApi/insertUser`, { email, password, uid}),
}
