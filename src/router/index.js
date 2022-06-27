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
    path: '/',
    component: () => import('../Full.vue'),
    children: [
      {path: '/', name: '首页', component: () => import('../views/HomePage.vue')},
      {path: '/login', name: '登录', component: () => import('../views/login/LoginPage.vue')},
      {path: '/active', name: '激活账号', component: () => import('../views/login/Active.vue')},
      {path: '/course/all', name: '全部课程', component: () => import('../views/Course/CourseAllPage.vue')},
      {path: '/course/explore/gre1v1', name: 'Gre私教班', component: () => import('../views/Course/Gre1v1.vue')},
      {path: '/course/explore/gmat1v1', name: 'Gmat私教班', component: () => import('../views/Course/Gmat1v1.vue')},
      {path: '/course/explore/gresmallclass', name: 'Gre全程提分班', component: () => import('../views/Course/GreSmallClass.vue')},
      {path: '/course/explore/gmatsmallclass', name: 'Gmat全程提分班', component: () => import('../views/Course/GmatSmallClass.vue')},
      {path: '/exam', name: '全真模考', component: () => import('../views/Exam/examDashboard.vue')},
    ]
  }
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


//用户类型:  admin, student, teacher
export const asyncRouterMap = [
  {
    path: '/',
    component: () => import('../Full.vue'),
    children: [
      {path: '/myprofile/profile', name: '个人资料', component: () => import('../views/UserProfile/myProfile.vue')},
      {path: '/myprofile/class', name: '我的课程', component: () => import('../views/UserProfile/myClass.vue')},
      //{path: 'myprofile/discuss', name: '我的讨论', component: () => import('../views/UserProfile/myDiscuss.vue')},
      {path: '/myprofile/invoice', name: '购买记录', component: () => import('../views/UserProfile/myInvoice.vue')},

      {path: '/classroom/manage', name: '管理课堂', component: () => import('../views/Course/ManageClassroom.vue'), meta: {roles: ['admin'] }},
      {path: '/order', name: '新建课程', component: () => import('../views/Admin/OrderManage.vue'), meta: {roles: ['admin']}},
      {path: '/course/classinfo', name: '课堂信息', component: () => import('../views/Course/ClassInfo.vue'), meta: {roles: ['teacher','student']}},

      {path: '/payment/checkout', name: 'Checkout', component: () => import('../views/Payment/checkout.vue')},
      {path: '/payment/cancel', name: '支付取消', component: () => import('../views/Payment/cancel.vue')},

      {path: '/admin/config', name: '配置选项', component: () => import('../views/Admin/ConfigOptions.vue'), meta: {roles: ['admin'] }},
      {path: '/admin/allusers', name: '所有用户', component: () => import('../views/Admin/AllUser.vue'), meta: {roles: ['admin'] }},
      {path: '/admin/allclasses', name: '所有课堂', component: () => import('../views/Admin/AllClasses.vue'), meta: {roles: ['admin'] }},
      {path: '/admin/classuser', name: '课堂用户', component: () => import('../views/Admin/ClassUser.vue'), meta: {roles: ['admin'] }},
      {path: '*', redirect: '/' }
    ]
  }
]

Vue.use(Meta)


export default router
