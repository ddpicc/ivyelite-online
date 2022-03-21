const router = require('koa-router')();
const controller = require('../controller/receiptController')

router.post('/receiptApi/createReceipt', controller.createReceipt)
router.get('/receiptApi/getReceiptByUid', controller.getReceiptByUid)
router.get('/receiptApi/getAllUserReceipt', controller.getAllUserReceipt)
module.exports = router