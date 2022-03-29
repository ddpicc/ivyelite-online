import api from './axiosConfig'

// login模块相关接口
export default {
  login: (email, password) => api.post(`/userApi/signin`, { email, password}),
  getInfo: (uid) => api.get(`/userApi/getinfo`, {uid}),
  updateUserName: (name, uid) => api.post(`/userApi/updateUserName`, {name, uid}),
  updateUserProfile: (name, sex, education, school, birth, uid) => api.post(`/userApi/updateUserProfile`, {name, sex, education, school, birth, uid}),
  findDataCountByUid: (uid) => api.get(`/userApi/findDataCountByUid`, {uid}),
  findDataCountByName: (name) => api.get(`/userApi/findDataCountByName`, {name}),  
  insertUser: (username, email, password, uid, register_time) => api.post(`/userApi/insertUser`, { username, email, password, uid, register_time}),
  sendActivateEmail: (email) => api.post(`/userApi/sendActivateEmail`, {email}),
  verifyActivateCode: (email, code) => api.post(`/userApi/verifyActivateCode`, {email, code}),
  findCountByEmail: (email) => api.get('/userApi/findCountByEmail', {email}),
  getQiniuToken: () => api.get('/userApi/getQiniuToken', {}),
  updateUserAvatar: (avatar_url, uid) => api.post(`/userApi/updateUserAvatar`, {avatar_url, uid}),
  getAllUsers: () => api.get(`/userApi/getAllUsers`, {}),
}
