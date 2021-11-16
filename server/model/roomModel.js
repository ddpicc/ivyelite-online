var sql = require('./base')

let query = sql.query

exports.saveRoomInfoToDb = ( value ) => {
	let _sql = "insert into room set course_id=?,subject=?,room_id=?,begin_timestamp=?,room_type=?,password=?;"
	return query( _sql, value)
}

exports.searchRoomInfoFromDb = ( course_id ) => {
	let _sql = `select * from room where course_id="${course_id}";`
	return query( _sql)
}

exports.deleteRoomFromDb = ( id ) => {
	let _sql = `delete from room where id="${id}";`
	return query( _sql)
}