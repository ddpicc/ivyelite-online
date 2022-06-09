const router = require('koa-router')();
const controller = require('../controller/receiptController')

router.post('/receiptApi/createReceipt', controller.createReceipt)
router.get('/receiptApi/getReceiptByUid', controller.getReceiptByUid)
router.get('/receiptApi/getAllUserReceipt', controller.getAllUserReceipt)
router.post('/courseApi/updateReceiptStatus', controller.updateReceiptStatus)

module.exports = router