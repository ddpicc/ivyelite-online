var sql = require('./base')

let query = sql.query

// 插入user和课程关系
exports.setUserCourseRelation = ( value ) => {
	let _sql = "insert into user_courses set user_uid=?,course_id=?,isStudent=?,isTeacher=?;"
	return query( _sql, value)
}

// 获取和当前user有关的课程
exports.findCourseByUser = ( user_uid ) => {
	let _sql = `select a.* from courses a inner join user_courses b on a.id = b.course_id where b.user_uid = "${user_uid}";`
	return query( _sql)
}


