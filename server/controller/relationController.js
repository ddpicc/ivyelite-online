const relationModel = require('../model/relationModel')

exports.setUserClassRelation = async ctx => {
	let { user_uid, class_id, isStudent, isTeacher } = ctx.request.body;
	await relationModel.setUserClassRelation([user_uid, class_id, isStudent, isTeacher]).then(res => {
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

exports.findClasseseByUser = async ctx => {
	let {user_uid} = ctx.request.query
	await relationModel.findClasseseByUser(user_uid).then( (res) => {
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

exports.isClassReserved = async ctx => {
	let {user_uid, class_id} = ctx.request.query
	await relationModel.isClassReserved(user_uid, class_id).then( res => {
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