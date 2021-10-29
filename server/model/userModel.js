var table = require('./table')
var sql = require('./base')

let query = sql.query 

// 建表
table.map(val => {
  sql.createTable(val)
})

// 注册用户
exports.insertData = ( value ) => {
  let _sql = "insert into users set name=?,pass=?,moment=?;"
  return query( _sql, value )
}
// 删除用户
exports.deleteUserData = ( name ) => {
  let _sql = `delete from users where name="${name}";`
  return query( _sql )
}
// 查找用户
exports.findUserByEmail = ( email ) => {
  let _sql = `select * from users where email="${email}";`
  return query( _sql )
}
// 通过PID查找用户信息
exports.getUserInfoByPid = ( pid ) => {
  let _sql = `select * from users where pid="${pid}";`
  return query( _sql )
}
// 通过名字查找用户
exports.findDataByName =  ( name ) => {
  let _sql = `select * from users where name="${name}";`
  return query( _sql)
}
// 通过名字查找用户数量判断是否已经存在
exports.findDataCountByName =  ( name ) => {
  let _sql = `select count(*) as count from users where name="${name}";`
  return query( _sql)
}