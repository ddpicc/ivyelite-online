const router = require('koa-router')();
const controller = require('../controller/userController')

router.post('/userApi/signin', controller.postSignin)
router.post('/userApi/signup', controller.postSignup)
router.get('/userApi/getinfo', controller.getUserInfoByPid)

module.exports = router