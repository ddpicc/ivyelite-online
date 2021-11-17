const router = require('koa-router')();
const controller = require('../controller/classRoomController')

router.post('/roomkit/createClass', controller.createClass)
router.get('/roomkit/getClassInfo', controller.getClassInfo)
router.post('/classroom/saveRoom', controller.saveRoomInfoToDb)
router.get('/classroom/searchRoomByCourseId', controller.searchRoomInfoFromDb)
router.post('/roomkit/getSDKToken', controller.getSDKToken)
router.delete('/classroom/deleteRoomFromDb', controller.deleteRoomFromDb)
router.post('/classroom/updateRoomStatus', controller.updateRoomStatus)
module.exports = router