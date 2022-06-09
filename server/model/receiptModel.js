var sql = require('./base')

let query = sql.query

// 生成一个receipt
exports.createReceipt = ( value ) => {
	let _sql = "insert into receipt set class_id=?,user_uid=?,create_timestamp=?,amount=?,processed=?;"
	return query( _sql, value)
}
// 查找该用户的receipt
exports.getReceiptByUid = ( user_uid ) => {
  let _sql = `select a.*,b.name,b.comment from receipt a inner join classes b on a.class_id = b.id where a.user_uid="${user_uid}" order by create_timestamp desc;`
  return query( _sql )
}
// 获取所有用户的receipt
exports.getAllUserReceipt = ( ) => {
  let _sql = `select a.*,b.name as class_name,b.comment,c.name as user_name,c.email from receipt a inner join classes b on a.class_id = b.id inner join users c on a.user_uid = c.uid order by create_timestamp desc;`
  return query( _sql )
}
// 更新receipt处理情况
exports.updateReceiptStatus = ( value ) => {
	let _sql = "update receipt set processed = 1 where id = ?;"
	return query( _sql, value)
}
