const router = require('koa-router')();
const controller = require('../controller/roomKitController')

router.post('/roomkit/createClass', controller.createClass)

module.exports = router