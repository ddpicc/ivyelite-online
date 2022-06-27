import router from './router'
import store from './store'


// 过滤符合条件的路由-可根据自己业务做调整-根据参数 to 做信息判定，如果符合条件，则前往相应页面，否则前往404 
function hasPermission(role, to) {
  //console.log(to.meta.role)
  if (role.indexOf('admin') >= 0) {
    return true // admin permission passed directly
  }
  if (to.meta.roles) {
    return to.meta.roles.indexOf(role) >= 0
  } else {
    return true
  }
}
const whiteList = ['/login', '/','/home','/course/all','/course/detail','/course/explore/gresmallclass','/course/explore/gre1v1','/course/explore/gmat1v1','/course/explore/gmatsmallclass','/active','/exam'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (store.state.user.uid) { // 路由守卫
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.state.user.roles.length === 0) { // 如果权限roles为空，则重新获取用户信息，更新roles
        store.dispatch('user/GetInfo').then( () => { // 拉取用户信息
          const role = store.state.user.roles
          store.dispatch('permission/GenerateRoutes', { role }).then(() => { // 根据roles权限生成可访问的路由表
            router.addRoutes(store.state.permission.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch((err) => {
					console.log(err)
          store.dispatch('user/LogOut').then(() => {
            next({ path: '/' })
          })
        })
      } else { // 如果已存在权限，过滤符合条件的路由，如果不符合，则跳往404页面    // 此处hasPermission是验证roles是否符合，其中参数to是要跳往的页面路由相关信息，可根据自己业务修改        
				if (hasPermission(store.state.user.roles, to)) {
          next()//
        } else {
          next({ path: '/404', replace: true, query: { noGoBack: true }})
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
