var sql = require('./base')

let query = sql.query

// 生成一个receipt
exports.createReceipt = ( value ) => {
	let _sql = "insert into receipt set class_id=?,user_uid=?,create_timestamp=?,amount=?;"
	return query( _sql, value)
}

// 查找该用户的receipt
exports.getReceiptByUid = ( user_uid ) => {
  let _sql = `select a.*,b.name,b.comment from receipt a inner join classes b on a.class_id = b.id where a.user_uid="${user_uid}" order by create_timestamp desc;`
  return query( _sql )
}
