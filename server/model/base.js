var mysql = require('mysql');
var config = require('../config/db.js')

var pool = mysql.createPool({
	host: config.database.HOST,
	user: config.database.USERNAME,
	password: config.database.PASSWORD,
	database: config.database.DATABASE,
	port: config.database.PORT,
  dateStrings: true,
});

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          //console.log(values);
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
        	connection.release()
      	})
      }
    })
  })
}

let createTable = (sql) => {
  return query(sql, [])
}

exports.query = query
exports.createTable = createTable