// initial state
// shape: [{ id, quantity }]
const state = () => ({
	sdk_token: '',
})

const getters = {

}

// actions
const actions = {
	//退出账户
  SetSdkTokenToVuex({ commit }, sdk_token) {
		commit('SET_TOKEN', sdk_token);
	},
}

// mutations
const mutations = {
	SET_TOKEN: (state, token) => {
		state.sdk_token = token;
	},
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}