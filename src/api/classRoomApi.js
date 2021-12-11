import api from './axiosConfig'

export default {
  createRoom: (subject, room_type, duration, host, settings) => api.post(`/roomkit/createRoom`, {subject, room_type, duration, host, settings}),
  getRoomInfofoFromEduCloud: (room_id) => api.get(`/roomkit/getRoomInfo`, {room_id}),
  saveRoom: (course_id, subject, room_id, begin_timestamp, room_type, password, status) => api.post(`/classroom/saveRoom`, {course_id, subject, room_id, begin_timestamp, room_type, password, status}),
  searchRoomByCourseId: (course_id, status) => api.get(`/classroom/searchRoomByCourseId`, {course_id, status}),
  getSDKToken: (device_id) => api.post(`/roomkit/getSDKToken`, {device_id}),
  deleteRoomFromDb: (id) => api.delete(`/classroom/deleteRoomFromDb`, {id}),
  updateRoomStatus: (status, id) => api.post(`/classroom/updateRoomStatus`, {status, id}),
}
