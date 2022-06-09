import api from './axiosConfig'

export default {
  setUserClassRelation: (user_uid, class_id, isStudent, isTeacher) => api.post(`/relationApi/setUserClassRelation`, { user_uid, class_id, isStudent, isTeacher}),
  findClasseseByUser: (user_uid) => api.get(`/relationApi/findClasseseByUser`, {user_uid}),
  isClassReserved: (user_uid, class_id) => api.get(`/relationApi/isClassReserved`, {user_uid, class_id}),
  findUsersByClass: (class_id) => api.get(`/relationApi/findUsersByClass`, {class_id}),
  findAllUsersNotInClass: (class_id) => api.get(`/relationApi/findAllUsersNotInClass`, {class_id}),
  deleteRelation: (user_uid, class_id) => api.delete(`/relationApi/deleteRelation`, {user_uid, class_id}),
  getAllTeacherOrStudent: (role) => api.get(`/relationApi/getAllTeacherOrStudent`, {role}),
}