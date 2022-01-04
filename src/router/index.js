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
      {path: '/login', name: '登录', component: () => import('../views/login/LoginPage.vue')},
      {path: '/register', name: '注册', component: () => import('../views/login/RegisterPage.vue')},
      {path: '/active', name: '激活账号', component: () => import('../views/login/Active.vue')},
      {path: '/course/all', name: '全部课程', component: () => import('../views/Course/CourseAllPage.vue')},
      {path: '/course/explore/1v1', name: '私教冲刺班', component: () => import('../views/Course/CourseOnePage.vue')},
      {path: '/course/explore/smallclass', name: '全程提分班', component: () => import('../views/Course/CourseSmallClassPage.vue')},
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


//用户类型:  admin, operator, default, premium, batch user, 
export const asyncRouterMap = [
  {
    path: '',
    component: () => import('../Full.vue'),
    children: [
      {path: 'myprofile/profile', name: '个人资料', component: () => import('../views/UserProfile/myProfile.vue')},
      {path: 'myprofile/class', name: '我的课程', component: () => import('../views/UserProfile/myClass.vue'), meta: {roles: ['student']}},
      {path: 'myprofile/teacherclass', name: '课程', component: () => import('../views/UserProfile/teacherClass.vue'), meta: {roles: ['teacher'] }},
      //{path: 'myprofile/discuss', name: '我的讨论', component: () => import('../views/UserProfile/myDiscuss.vue')},
      {path: 'myprofile/invoice', name: '购买记录', component: () => import('../views/UserProfile/myInvoice.vue')},
      {path: 'course/prepare', name: '准备课堂', component: () => import('../views/Course/PrepareZoom.vue')},
      //{path: 'course/create', name: '新建课程', component: () => import('../views/Course/CreateCourse.vue'), meta: {roles: ['teacher','admin']}},
      {path: 'course/classinfo', name: '课堂信息', component: () => import('../views/Course/ClassInfo.vue'), meta: {roles: ['teacher','admin']}},
      {path: '/zegoClass', name: '即构课堂', component: () => import('../views/Course/ZegoClass.vue')},
      {path: '/payment/checkout', name: 'Checkout', component: () => import('../views/Payment/checkout.vue')},
      {path: '/payment/success', name: '支付成功', component: () => import('../views/Payment/success.vue')},
      {path: '/payment/cancel', name: '支付取消', component: () => import('../views/Payment/cancel.vue')},
      {path: '*', redirect: '/' }
    ]
  }
]

Vue.use(Meta)


export default router
