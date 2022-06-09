const router = require('koa-router')();
const controller = require('../controller/courseController')

router.get('/courseApi/getClassesbyCourseId', controller.getClassesbyCourseId)
router.get('/courseApi/findOneClassById', controller.findOneClassById)
router.get('/courseApi/getAllClasses', controller.getAllClasses)
router.post('/courseApi/updateClassSeat', controller.updateClassSeat)
router.post('/courseApi/insertClass', controller.insertClass)

module.exports = router