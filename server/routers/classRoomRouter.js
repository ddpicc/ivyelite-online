const router = require('koa-router')();
const controller = require('../controller/classRoomController')

router.post('/roomkit/createRoom', controller.createRoom)
router.get('/roomkit/getRoomInfo', controller.getRoomInfo)
router.post('/classroom/saveRoom', controller.saveRoomInfoToDb)
router.get('/classroom/searchRoomByCourseId', controller.searchRoomInfoFromDb)
router.post('/roomkit/getSDKToken', controller.getSDKToken)
router.delete('/classroom/deleteRoomFromDb', controller.deleteRoomFromDb)
router.post('/classroom/updateRoomStatus', controller.updateRoomStatus)
module.exports = router