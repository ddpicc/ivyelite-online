

/**
* 发送邮件
* @param {string} to 收件方邮箱
* @param {string} title 内容标题
* @param {string} content 邮件内容
* @param {Function} callback 回调函数（内置参数）
* 
*/
const nodemailer = require('nodemailer');

function mail(to,title,content) {

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    }, auth: {
        user: 'ivyelite-online@outlook.com', pass: 'ivyelite123'
    }
  });

  let info = {
      from: 'ivyelite-online@outlook.com',//发送方邮箱
      to: to, 
      subject: title,
      //text: content
      html: content
  }

  //发送邮件
  return new Promise((resolve, reject) => {
    transporter.sendMail(info,(err, info) => {
      if (err) {
        reject(err)
      } else {
        resolve(info)
      }
    })
  })

  
}

module.exports = {
  mail
}