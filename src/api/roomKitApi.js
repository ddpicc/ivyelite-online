import api from './axiosConfig'

export default {
  createClass: (subject, room_type, duration, host, settings) => api.post(`/roomkit/createClass`, {subject, room_type, duration, host, settings}),
}
