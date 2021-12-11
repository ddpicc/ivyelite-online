var sql = require('./base')

let query = sql.query

// 插入user和课堂关系
exports.setUserClassRelation = ( value ) => {
	let _sql = "insert into user_class set user_uid=?,class_id=?,isStudent=?,isTeacher=?;"
	return query( _sql, value)
}

// 获取和当前user有关的课堂
exports.findClasseseByUser = ( user_uid ) => {
	let _sql = `select a.* from classes a inner join user_class b on a.id = b.class_id where b.user_uid = "${user_uid}";`
	return query( _sql)
}

// 根据user id和class id查看是否存在关系
exports.isClassReserved = ( user_uid, class_id ) => {
	let _sql = `select count(*) as count from user_class where user_uid="${user_uid}" and class_id="${class_id}";`
	return query( _sql)
}
