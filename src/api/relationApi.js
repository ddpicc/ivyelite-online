import api from './axiosConfig'

export default {
  setUserCourseRelation: (user_uid, course_id, isStudent, isTeacher) => api.post(`/relationApi/setUserCourseRelation`, { user_uid, course_id, isStudent, isTeacher}),
  findCourseByUser: (user_uid) => api.get(`/relationApi/findCourseByUser`, {user_uid}),
}