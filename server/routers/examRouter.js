const router = require('koa-router')();
const controller = require('../controller/examController')

router.get('/examApi/loadQuestionById', controller.loadQuestionById)
router.get('/examApi/loadInfoPageById', controller.loadInfoPageById)

module.exports = router