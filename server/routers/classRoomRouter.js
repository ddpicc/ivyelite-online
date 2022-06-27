const router = require('koa-router')();
const controller = require('../controller/classRoomController')

router.post('/classroom/saveRoom', controller.saveRoomInfoToDb)
router.get('/classroom/searchRoomByClassId', controller.searchRoomInfoFromDb)
router.delete('/classroom/deleteRoomFromDb', controller.deleteRoomFromDb)
router.post('/classroom/updateRoomStatus', controller.updateRoomStatus)
router.post('/classroom/createZoomClass', controller.createZoomClass)
router.get('/classroom/zoomauth', controller.handleAuthcode)
router.get('/classroom/getZoomAccessToken', controller.getZoomAccessToken)
router.get('/classroom/getZakToken', controller.getZakToken)
router.post('/classroom/getSignature', controller.getSignature)



module.exports = router