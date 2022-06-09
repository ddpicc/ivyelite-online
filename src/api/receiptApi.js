import api from './axiosConfig'

// login模块相关接口
export default {
  createReceipt: (class_id, user_uid,create_timestamp,amount,processed) => api.post(`/receiptApi/createReceipt`, { class_id, user_uid,create_timestamp,amount,processed}),
  getReceiptByUid: (user_uid) => api.get(`/receiptApi/getReceiptByUid`, {user_uid}),
  getAllUserReceipt: () => api.get(`/receiptApi/getAllUserReceipt`),
  updateReceiptStatus: (receipt_id) => api.post(`/receiptApi/updateReceiptStatus`, {receipt_id}),
}