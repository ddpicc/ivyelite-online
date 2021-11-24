const relationModel = require('../model/relationModel')

exports.setUserCourseRelation = async ctx => {
	let { user_uid, course_id, isStudent, isTeacher } = ctx.request.body;
	await relationModel.setUserCourseRelation([user_uid, course_id, isStudent, isTeacher]).then(res => {
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

exports.findCourseByUser = async ctx => {
	let {user_uid} = ctx.request.query
	await relationModel.findCourseByUser(user_uid).then( (res) => {
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

exports.isCourseReserved = async ctx => {
	let {user_uid, course_id} = ctx.request.query
	await relationModel.isCourseReserved(user_uid, course_id).then( res => {
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