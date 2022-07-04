const examModel = require('../model/examModel.js')

exports.loadQuestionById = async ctx => {
	let {id} = ctx.request.query
	await examModel.loadQuestionById(id).then( (res) => {
		ctx.body = {
			code: 200,
      message: '成功',
      data: res
		}
	}).catch(err => {
		console.log(err)
		ctx.body = {
			code: 500,
			message: '失败'
		}
	})
}

exports.loadInfoPageById = async ctx => {
	let {id} = ctx.request.query
	await examModel.loadInfoPageById(id).then( (res) => {
		ctx.body = {
			code: 200,
      message: '成功',
      data: res
		}
	}).catch(err => {
		console.log(err)
		ctx.body = {
			code: 500,
			message: '失败'
		}
	})
}