const courseModel = require('../model/courseModel.js')

exports.getAllCourses = async ctx => {
	await courseModel.findAllCourses().then( (res) => {
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
