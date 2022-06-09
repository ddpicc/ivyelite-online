const router = require('koa-router')();
const controller = require('../controller/relationController')

router.post('/relationApi/setUserClassRelation', controller.setUserClassRelation)
router.get('/relationApi/findClasseseByUser', controller.findClasseseByUser)
router.get('/relationApi/isClassReserved', controller.isClassReserved)
router.get('/relationApi/findUsersByClass', controller.findUsersByClass)
router.get('/relationApi/findAllUsersNotInClass', controller.findAllUsersNotInClass)
router.delete('/relationApi/deleteRelation', controller.deleteRelation)
router.get('/relationApi/getAllTeacherOrStudent', controller.getAllTeacherOrStudent)

module.exports = router