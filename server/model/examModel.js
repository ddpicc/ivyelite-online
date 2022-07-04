var sql = require('./base')

let query = sql.query

// 更新config里contact的信息
exports.loadQuestionById = ( value ) => {
	let _sql = "select * from completion_question where id = ?;"
	return query( _sql, value)
}

exports.loadInfoPageById = ( value ) => {
	let _sql = "select * from info_page where id = ?;"
	return query( _sql, value)
}

