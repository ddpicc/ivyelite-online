const router = require('koa-router')();
const controller = require('../controller/courseController')

router.get('/courseApi/getAllCourses', controller.getAllCourses)
router.get('/courseApi/findOneCourseById', controller.findOneCourseById)
router.get('/courseApi/getClassesbyCourseId', controller.getClassesbyCourseId)
router.get('/courseApi/findOneClassById', controller.findOneClassById)
router.get('/courseApi/getCommentbyCourseId', controller.getCommentbyCourseId)
router.get('/courseApi/getAllClasses', controller.getAllClasses)
//router.get('/courseApi/countStudentNm', controller.countStudentNm)
router.post('/courseApi/updateClassSeat', controller.updateClassSeat)

module.exports = router