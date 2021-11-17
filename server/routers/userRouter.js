const router = require('koa-router')();
const controller = require('../controller/userController')

router.post('/userApi/signin', controller.postSignin)
router.post('/userApi/signup', controller.postSignup)
router.get('/userApi/getinfo', controller.getUserInfoByUid)
router.post('/userApi/updateUserName', controller.updateUserName)
router.post('/userApi/updateUserProfile', controller.updateUserProfile)
router.get('/userApi/findDataCountByUid', controller.findDataCountByUid)
router.post('/userApi/insertUser', controller.insertUser)
module.exports = router