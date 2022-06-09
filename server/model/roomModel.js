var sql = require('./base')

let query = sql.query

exports.saveRoomInfoToDb = ( value ) => {
	let _sql = "insert into room set class_id=?,subject=?,room_id=?,host_id=?,begin_timestamp=?,room_type=?,password=?,status=?;"
	return query( _sql, value)
}

exports.searchRoomInfoFromDb = ( class_id, status ) => {
	let _sql = `select * from room where class_id="${class_id}" and status="${status}";`
	return query( _sql)
}

exports.deleteRoomFromDb = ( id ) => {
	let _sql = `delete from room where id="${id}";`
	return query( _sql)
}

exports.updateRoomStatus = ( value ) => {
	let _sql = "update room set status=? where id=?;"
	return query( _sql, value)
}
