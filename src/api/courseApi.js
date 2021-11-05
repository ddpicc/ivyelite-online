import api from './axiosConfig'

export default {
  getAllCourses: () => api.get(`/courseApi/getAllCourses`, {}),
  findOneCourseById: (id) => api.get(`/courseApi/findOneCourseById`, {id}),
}
