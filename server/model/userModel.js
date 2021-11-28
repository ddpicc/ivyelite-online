var table = require('./table')
var sql = require('./base')

let query = sql.query 

// 建表
table.map(val => {
  sql.createTable(val)
})

// 更新用户名字
exports.updateUserName = ( value ) => {
  let _sql = "update users set name=? where uid=?;"
  return query( _sql, value )
}
// 查找用户
exports.findUserByEmail = ( email ) => { 
  let _sql = `select * from users where email="${email}";`
  return query( _sql )
}
// 通过PID查找用户信息
exports.getUserInfoByUid = ( uid ) => {
  let _sql = `select * from users where uid="${uid}";`
  return query( _sql )
}
// 更新用户profile信息
exports.updateUserProfile = ( value ) => {
  let _sql = "update users set name=?,sex=?,education=?,school=?,birth=? where uid=?;"
  return query( _sql, value )
}
// 通过uid查找用户数量判断是否已经存在
exports.findDataCountByUid =  ( uid ) => {
  let _sql = `select count(*) as count from users where uid="${uid}";`
  return query( _sql)
}
// 注册时添加用户
exports.insertUser = ( value ) => {
	let _sql = "insert into users set name = ?, email=?,pass=?,uid=?;"
	return query( _sql, value)
}
// 通过用户email和passord查找用户数量判断该用户是否已经注册
exports.findCountByEmail = ( email ) => {
  let _sql = `select count(*) as count from users where email="${email}";`
  return query(_sql)
}
// 更新用户名字
exports.updateUserAvatar = ( value ) => {
  let _sql = "update users set avatar_url=? where uid=?;"
  return query( _sql, value )
}