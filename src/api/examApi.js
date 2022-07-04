import api from './axiosConfig'

// 模拟考试模块相关接口
export default {
  loadQuestionById: (id) => api.get(`/examApi/loadQuestionById`, {id}),
  loadInfoPageById: (id) => api.get(`/examApi/loadInfoPageById`, {id}),
}