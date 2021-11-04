/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'


//不理解，但是是为了解决 next()的时候路由导航钩子时出现"uncaught (in promise) undefined 
//https://blog.csdn.net/hgs_5683/article/details/101027580
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    component: () => import('../Full.vue'),
    children: [
      {path: '', name: '首页', component: () => import('../views/HomePage.vue')},
      {path: 'login', name: '登录', component: () => import('../views/login/LoginPage.vue')},
      {path: 'course/all', name: '全部课程', component: () => import('../views/Course/CourseAllPage.vue')},
      {path: 'myprofile/profile', name: '个人资料', component: () => import('../views/UserProfile/myProfile.vue')},
      {path: 'myprofile/class', name: '我的课程', component: () => import('../views/UserProfile/myClass.vue')},
      {path: 'course/prepare', name: '准备课程', component: () => import('../views/Course/PrepareCourse.vue')},
      {path: '*', redirect: '/' }
    ]
  },
]
// Create a new router
const router = new Router({
  mode: 'hash',
  routes: constantRouterMap,
  
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
});


//用户类型:  admin, operator, default, premium, batch user, 
export const asyncRouterMap = [

]

Vue.use(Meta)


export default router
