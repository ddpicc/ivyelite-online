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