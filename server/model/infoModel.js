var sql = require('./base')

let query = sql.query

// 更新config里contact的信息
exports.saveContactConfig = ( value ) => {
	let _sql = "update config set contact_phone=?,contact_wechat=?,contact_email=?,qr_code=? where id = 1;"
	return query( _sql, value)
}

// 读取config的信息
exports.loadConfig = ( value ) => {
	let _sql = "select * from config where id = 1;"
	return query( _sql, value)
}

// 保存收集到的用户信息，目前两个来源（1. 报名课程， 2. 报名讲座）
exports.saveToColInfo = ( value ) => {
	let _sql = "insert into collect_info set user_name=?,wechat=?,user_email=?,class_id=?,user_uid=?,origin=?;"
	return query( _sql, value)
}

