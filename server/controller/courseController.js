const courseModel = require('../model/courseModel.js')


exports.getClassesbyCourseId = async ctx => {
	let {course_id} = ctx.request.query
	await courseModel.getClassesbyCourseId(course_id).then( (res) => {
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

exports.findOneClassById = async ctx => {
	let {classId} = ctx.request.query
	await courseModel.findOneClassById(classId).then( (res) => {
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

exports.getAllClasses = async ctx => {
	await courseModel.getAllClasses().then( (res) => {
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

exports.updateClassSeat = async ctx => {
	let { class_id } = ctx.request.body;
	await courseModel.updateClassSeat([class_id]).then( (res) => {
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

exports.insertClass = async ctx => {
let { name, time_range, course_id, comment, status } = ctx.request.body;
await courseModel.insertClass([ name, time_range, course_id, comment, status ]).then(res => {
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