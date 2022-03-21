var sql = require('./base')

let query = sql.query

// 插入user和课堂关系
exports.setUserClassRelation = ( value ) => {
	let _sql = "insert into user_class set user_uid=?,class_id=?,isStudent=?,isTeacher=?;"
	return query( _sql, value)
}

// 获取和当前user有关的课堂
exports.findClasseseByUser = ( user_uid ) => {
	let _sql = `select a.* from classes a inner join user_class b on a.id = b.class_id where b.user_uid = "${user_uid}" and b.class_id != 1 and b.class_id != 2;`
	return query( _sql)
}

// 根据user id和class id查看是否存在关系
exports.isClassReserved = ( user_uid, class_id ) => {
	let _sql = `select count(*) as count from user_class where user_uid="${user_uid}" and class_id="${class_id}";`
	return query( _sql)
}

// 获取该课堂有关的所有user
exports.findUsersByClass = ( class_id ) => {
	let _sql = `select a.*,b.isStudent,b.isTeacher from users a inner join user_class b on a.uid = b.user_uid where b.class_id = "${class_id}";`
	return query( _sql)
}
// 获取跟课堂无关的其他用户
exports.findAllUsersNotInClass = (class_id) => {
	let _sql = `select * from users where uid not in (select user_uid from user_class where class_id = "${class_id}");`
	return query( _sql )
}
//删除一个user和课堂的关系
exports.deleteRelation = ( user_uid, class_id  ) => {
	let _sql = `delete from user_class where user_uid="${user_uid}" and class_id="${class_id}";`
	return query( _sql)
}