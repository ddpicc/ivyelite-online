import api from './axiosConfig'

export default {
  getClassesbyCourseId: (course_id) => api.get(`/courseApi/getClassesbyCourseId`, {course_id}),
  findOneClassById: (classId) => api.get(`/courseApi/findOneClassById`, {classId}),
  getAllClasses: () => api.get(`/courseApi/getAllClasses`, {}),
  insertClass: (name, time_range, course_id, comment, status) => api.post(`/courseApi/insertClass`, {name, time_range, course_id, comment, status}),
}
