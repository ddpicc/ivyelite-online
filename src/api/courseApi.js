import api from './axiosConfig'

export default {
  getAllCourses: () => api.get(`/courseApi/getAllCourses`, {}),
}
