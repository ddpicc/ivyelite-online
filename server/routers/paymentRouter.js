const router = require('koa-router')();
const controller = require('../controller/paymentController')

router.post('/payment/create-checkout-session', controller.createCheckoutSession)
router.post('/payment/webhook', controller.paymentNotifyReceive)
router.get('/payment/retrive-session-info', controller.retriveSessionInfo)


module.exports = router