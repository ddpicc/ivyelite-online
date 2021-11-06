const router = require('koa-router')();
const controller = require('../controller/relationController')

router.post('/relationApi/setUserCourseRelation', controller.setUserCourseRelation)
router.get('/relationApi/findCourseByUser', controller.findCourseByUser)

module.exports = router