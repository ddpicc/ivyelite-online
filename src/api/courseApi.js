import api from './axiosConfig'

export default {
  getAllCourses: () => api.get(`/courseApi/getAllCourses`, {}),
  findOneCourseById: (id) => api.get(`/courseApi/findOneCourseById`, {id}),
  getClassesbyCourseId: (course_id) => api.get(`/courseApi/getClassesbyCourseId`, {course_id}),
  findOneClassById: (classId) => api.get(`/courseApi/findOneClassById`, {classId}),
  getCommentbyCourseId: (course_id) => api.get(`/courseApi/getCommentbyCourseId`, {course_id}),
}
