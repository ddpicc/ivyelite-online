var sql = require('./base')

let query = sql.query


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

// 查找所有课堂
exports.getAllClasses = () => {
	let _sql = "select * from classes where id!=1 and id!=2;"
	return query( _sql )
}

// 更新课堂人数
exports.updateClassSeat = ( value ) => {
	let _sql = "update classes set available_seat = available_seat - 1 where id = ?;"
	return query( _sql, value)
}

//添加新的class，适用于1v1和讲座
exports.insertClass = ( value ) => {
	let _sql = "insert into classes set name=?,time_range=?,course_id=?,comment=?,status=?;"
	return query( _sql, value)
}