import api from './axiosConfig'

export default {
  createCheckoutSession: ( price_id, quantity, class_id, user_uid) => api.post(`/payment/create-checkout-session`, {price_id, quantity,class_id, user_uid}),
  retriveSessionInfo: ( stripe_session_id ) => api.get(`/payment/retrive-session-info`,{stripe_session_id}),
}