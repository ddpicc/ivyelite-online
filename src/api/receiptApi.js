import api from './axiosConfig'

// login模块相关接口
export default {
  createReceipt: (class_id, user_uid,create_timestamp,amount) => api.post(`/receiptApi/createReceipt`, { class_id, user_uid,create_timestamp,amount}),
  getReceiptByUid: (user_uid) => api.get(`/receiptApi/getReceiptByUid`, {user_uid}),
}