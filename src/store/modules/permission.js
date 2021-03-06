import { asyncRouterMap, constantRouterMap } from '@/router'
/** * 引入 src/router/index中定义的asyncRouterMap与constantRouterMap * constantRounterMap：一般写入基础路由/login、/404等 * asyncRouterMap：写入需配置路由，且由roles管理
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param role
 * @param route
 */
function hasPermission(role, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.indexOf(role) >= 0
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param role
 */
function filterAsyncRouter(asyncRouterMap, role) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(role, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, role)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const state = () => ({
	routers: constantRouterMap,
	addRouters: []
})

const getters = {

}

const actions = {
	GenerateRoutes({ commit }, data) {
		return new Promise(resolve => {
			const { role } = data
			let accessedRouters = []  // 此处可根据业务需求做调整，本项目是admin拥有所有权限
			if (role.indexOf('admin') >= 0) {
				accessedRouters = asyncRouterMap
			} else {
				accessedRouters = filterAsyncRouter(asyncRouterMap, role)
			}
			commit('SET_ROUTERS', accessedRouters)
			resolve()
		})
	}
}

const mutations = {
	SET_ROUTERS: (state, routers) => {
		state.addRouters = routers
		state.routers = constantRouterMap.concat(routers)
	}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}