import api from './axiosConfig'

// login模块相关接口
export default {
  login: (email, password) => api.post(`/userApi/signin`, { email, password}),
  getInfo: (uid) => api.get(`/userApi/getinfo`, {uid}),
  updateUserName: (name, uid) => api.post(`/userApi/updateUserName`, {name, uid}),
  updateUserProfile: (name, sex, education, school, birth, uid) => api.post(`/userApi/updateUserProfile`, {name, sex, education, school, birth, uid}),
  findDataCountByUid: (uid) => api.get(`/userApi/findDataCountByUid`, {uid}),
  insertUser: (email, password, uid, register_time) => api.post(`/userApi/insertUser`, { email, password, uid, register_time}),
  sendActivateEmail: (email, content) => api.post(`/userApi/sendActivateEmail`, {email, content}),
  activeUser: (is_active, uid, email) => api.post(`/userApi/activeUser`, {is_active, uid, email}),
  findCountByEmail: (email) => api.get('/userApi/findCountByEmail', {email}),
  getQiniuToken: () => api.get('/userApi/getQiniuToken', {}),
  updateUserAvatar: (avatar_url, uid) => api.post(`/userApi/updateUserAvatar`, {avatar_url, uid}),
}
