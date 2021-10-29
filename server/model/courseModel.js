var sql = require('./base')

let query = sql.query

// 查找所有课程
exports.findAllCourses = ( value ) => {
	let _sql = "select * from courses;"
	return query( _sql, value )
}