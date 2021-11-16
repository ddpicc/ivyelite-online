const router = require('koa-router')();
const controller = require('../controller/classRoomController')

router.post('/roomkit/createClass', controller.createClass)
router.get('/roomkit/getClassInfo', controller.createClass)
router.post('/classroom/saveRoom', controller.saveRoomInfoToDb)
router.get('/classroom/searchRoomByCourseId', controller.searchRoomInfoFromDb)
router.post('/roomkit/getSDKToken', controller.getSDKToken)
router.delete('/classroom/deleteRoomFromDb', controller.deleteRoomFromDb)
module.exports = router