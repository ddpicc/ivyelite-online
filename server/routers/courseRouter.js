const router = require('koa-router')();
const controller = require('../controller/courseController')

router.get('/courseApi/getAllCourses', controller.getAllCourses)
router.get('/courseApi/findOneCourseById', controller.findOneCourseById)

module.exports = router