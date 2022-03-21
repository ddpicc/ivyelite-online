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

exports.findOneCourseById = async ctx => {
	let {id} = ctx.request.query
	await courseModel.findOneCourseById(id).then( (res) => {
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

exports.getCommentbyCourseId = async ctx => {
	let {course_id} = ctx.request.query
	await courseModel.getCommentbyCourseId(course_id).then( (res) => {
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

/* exports.countStudentNm = async ctx => {
	let {class_id} = ctx.request.query
	await courseModel.countStudentNm(class_id).then( (res) => {
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
} */

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
