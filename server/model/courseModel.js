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
	let _sql = "update courses set name=?,cover_url=?,summary=?,description=?,time_arrange=?,status=?;"
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