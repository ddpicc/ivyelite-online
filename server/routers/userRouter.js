const router = require('koa-router')();
const controller = require('../controller/userController')

router.post('/userApi/signin', controller.postSignin)
router.get('/userApi/getinfo', controller.getUserInfoByUid)
router.post('/userApi/updateUserName', controller.updateUserName)
router.post('/userApi/updateUserProfile', controller.updateUserProfile)
router.get('/userApi/findDataCountByUid', controller.findDataCountByUid)
router.post('/userApi/insertUser', controller.insertUser)
router.post('/userApi/sendActivateEmail', controller.sendActivateEmail)
router.post('/userApi/activeUser', controller.activeUser)
router.get('/userApi/findCountByEmail', controller.findCountByEmail)
router.get('/userApi/getQiniuToken', controller.getQiniuToken)
router.post('/userApi/updateUserAvatar', controller.updateUserAvatar)
module.exports = router