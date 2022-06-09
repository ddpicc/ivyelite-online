import api from './axiosConfig'

// save info模块相关接口
export default {
  saveContactConfig: (contact_phone, contact_wechat, contact_email, qr_code) => api.post(`/infoApi/saveContactConfig`, { contact_phone, contact_wechat, contact_email, qr_code}),
  loadConfig: () => api.get(`/infoApi/loadConfig`),
  saveToColInfo: (user_name, wechat, user_email, class_id, user_uid, origin) => api.post(`/infoApi/saveToColInfo`, {user_name, wechat, user_email, class_id, user_uid, origin}),
  uploadContactQRCode: (token, url) => api.post(`/infoApi/uploadContactQRCode`,{token,url}),
}