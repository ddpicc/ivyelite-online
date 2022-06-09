const router = require('koa-router')();
const controller = require('../controller/infoController')

router.post('/infoApi/saveContactConfig', controller.saveContactConfig)
router.get('/infoApi/loadConfig', controller.loadConfig)
router.post('/infoApi/saveToColInfo', controller.saveToColInfo)
router.post('/infoApi/uploadContactQRCode', controller.uploadContactQRCode)


module.exports = router