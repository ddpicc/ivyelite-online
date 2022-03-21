var sql = require('./base')

let query = sql.query

// 查找所有课程
exports.findAllCourses = () => {
	let _sql = "select * from courses;"
	return query( _sql )
}

// 通过id查找课程信息
exports.findOneCourseById = ( id ) => {
  let _sql = `select * from courses where id="${id}";`
  return query( _sql )
}

//更新课程描述信息
exports.updateCourseInfo = ( value ) => {
	let _sql = "update courses set name=?,cover_url=?,summary=?,description=?,time_arrange=?,type=?;"
	return query( _sql, value)
}

//根据课程id查找该课程下的所有课堂
exports.getClassesbyCourseId = ( course_id ) => {
	let _sql = `select * from classes where course_id="${course_id}";`
	return query( _sql)
}

// 通过id查找课堂信息
exports.findOneClassById = ( id ) => {
  let _sql = `select * from classes where id="${id}";`
  return query(_sql)
}

//根据课程id获取该课程的学生反馈，显示在课程页面
exports.getCommentbyCourseId = ( course_id ) => {
	let _sql = `select * from user_comment where course_id="${course_id}";`
	return query( _sql)
}

// 查找所有课堂
exports.getAllClasses = () => {
	let _sql = "select * from classes where id!=1 and id!=2;"
	return query( _sql )
}

// count 该课堂的学生人数
/* exports.countStudentNm = ( class_id ) => {
	let _sql = `select count(*) as count from user_class where class_id="${class_id}" and isStudent = 1;`
	return query( _sql)
} */

// 更新课堂人数
exports.updateClassSeat = ( value ) => {
	let _sql = "update classes set available_seat = available_seat - 1 where id = ?;"
	return query( _sql, value)
}