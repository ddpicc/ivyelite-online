import api from './axiosConfig'

export default {
  createClass: (subject, room_type, duration, host, settings) => api.post(`/roomkit/createClass`, {subject, room_type, duration, host, settings}),
  getClassInfoFromEduCloud: (room_id) => api.get(`/roomkit/getClassInfo`, {room_id}),
  saveRoom: (course_id, subject, room_id, begin_timestamp, room_type, password) => api.post(`/classroom/saveRoom`, {course_id, subject, room_id, begin_timestamp, room_type, password}),
  searchRoomByCourseId: (course_id) => api.get(`/classroom/searchRoomByCourseId`, {course_id}),
  getSDKToken: (device_id) => api.post(`/roomkit/getSDKToken`, {device_id}),
}
