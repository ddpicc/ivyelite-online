const router = require('koa-router')();
const controller = require('../controller/signin')

router.post('/api/signin', controller.postSignin)

module.exports = router