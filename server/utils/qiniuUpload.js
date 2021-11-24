/*
七牛云配置
*/

const qiniu = require('qiniu')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env'})

const mac = new qiniu.auth.digest.Mac(process.env.QINIU_ACCESSKEY,process.env.QINIU_SECRETKEY);
const options = {
  scope: 'ivyelite',
  expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options);
module.exports = {
  generateUploadToken () {
    return putPolicy.uploadToken(mac);
  }
}