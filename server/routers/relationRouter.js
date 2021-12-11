const router = require('koa-router')();
const controller = require('../controller/relationController')

router.post('/relationApi/setUserClassRelation', controller.setUserClassRelation)
router.get('/relationApi/findClasseseByUser', controller.findClasseseByUser)
router.get('/relationApi/isClassReserved', controller.isClassReserved)


module.exports = router