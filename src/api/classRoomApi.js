import api from './axiosConfig'

export default {
  saveRoom: (class_id, subject, room_id, password, status) => api.post(`/classroom/saveRoom`, {class_id, subject, room_id, password, status}),
  searchRoomByClassId: (class_id, status) => api.get(`/classroom/searchRoomByClassId`, {class_id, status}),
  deleteRoomFromDb: (id) => api.delete(`/classroom/deleteRoomFromDb`, {id}),
  updateRoomStatus: (status, id) => api.post(`/classroom/updateRoomStatus`, {status, id}),
  createZoomClass: (subject, password) => api.post(`/classroom/createZoomClass`, {subject, password}),
  getZoomAccessToken: () => api.get(`/classroom/getZoomAccessToken`, {}),
  getZakToken: () => api.get(`/classroom/getZakToken`, {}),
  getSignature: (meetingNumber, role) => api.get(`/classroom/getSignature`, {meetingNumber, role}),  
}
