const router = require('koa-router')();
const controller = require('../controller/userController')

router.post('/userApi/signin', controller.postSignin)
router.get('/userApi/getinfo', controller.getUserInfoByUid)
router.post('/userApi/updateUserName', controller.updateUserName)
router.post('/userApi/updateUserProfile', controller.updateUserProfile)
router.get('/userApi/findDataCountByUid', controller.findDataCountByUid)
router.get('/userApi/findDataCountByName', controller.findDataCountByName)
router.post('/userApi/insertUser', controller.insertUser)
router.post('/userApi/sendActivateEmail', controller.sendActivateEmail)
router.post('/userApi/verifyActivateCode', controller.verifyActivateCode)
router.get('/userApi/findCountByEmail', controller.findCountByEmail)
router.get('/userApi/getQiniuToken', controller.getQiniuToken)
router.post('/userApi/updateUserAvatar', controller.updateUserAvatar)
router.get('/userApi/getAllUsers', controller.getAllUsers)
router.post('/userApi/updateUserPass', controller.updateUserPass)

module.exports = router