import Cookies from 'js-cookie';
import userApi from '../../api/userApi'
import md5 from 'md5'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
	name: '',
	roles: [],
	pid: '',
	token: '',
})

const getters = {

}

// actions
const actions = {
	//退出账户
  LogOut({ commit }) {
		return new Promise(resolve => {
			commit('SET_NAME', '');
			commit('SET_ROLES', '');
			commit('SET_TOKEN', '');
			Cookies.remove('ivyelite-token');
			resolve();
		});
	},

  LoginByEmail({ commit }, userInfo) {
		const email = userInfo.email;
		const password = md5(userInfo.password);
		return new Promise((resolve, reject) => {
			userApi.login(email, password).then( (res) => {
				const data = res.data
				if (data.code === 200) {
					Cookies.set('ivyelite-token', data.token);
					commit('SET_TOKEN', data.token);
					commit('SET_PID', data.data[0].pid);
					resolve('login success');
				}else{
					resolve('login fail');
				}
			}).catch(error =>{
					reject(error);
			});
		});
	},

	// 获取用户信息
	GetInfo({ commit, state }) {
		return new Promise((resolve, reject) => {
			userApi.getInfo(state.pid).then(response => {
				const data = response.data
				//获取用户权限并存储roles
				if (data.data[0].roles && data.data[0].roles.length > 0) {
					commit('SET_ROLES', data.data[0].roles)
				} else {
					reject('getInfo: roles must be a non-null array !')
				}
				commit('SET_NAME', data.data[0].name)
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
	},
}

// mutations
const mutations = {
	SET_NAME: (state, name) => {
		state.name = name;
	},
	SET_ROLES: (state, roles) => {
		state.roles = roles;
	},
	SET_PID: (state, pid) => {
		state.pid = pid;
	},
	SET_TOKEN: (state, token) => {
		state.token = token;
	},
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}