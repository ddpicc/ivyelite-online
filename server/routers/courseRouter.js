const router = require('koa-router')();
const controller = require('../controller/courseController')

router.get('/courseApi/getAllCourses', controller.getAllCourses)

module.exports = router