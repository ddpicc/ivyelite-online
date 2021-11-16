const router = require('koa-router')();
const controller = require('../controller/userController')

router.post('/userApi/signin', controller.postSignin)
router.post('/userApi/signup', controller.postSignup)
router.get('/userApi/getinfo', controller.getUserInfoByUid)
router.post('/userApi/updateUserName', controller.updateUserName)
router.post('/userApi/updateUserProfile', controller.updateUserProfile)

module.exports = router