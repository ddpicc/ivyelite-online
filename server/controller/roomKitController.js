const md5 = require('md5')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env'})
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

function tokenExpired(loadFromLocal) {
  let request_time = JSON.parse(loadFromLocal).request_time;
  if(Math.floor(new Date().getTime()/1000) - request_time < 86400){
    return true;
  }else{
    return false;
  }
}

function getAccessToken() {
  const tryToken = localStorage.getItem('token-info');
  if(!tryToken || tokenExpired(tryToken)){
    const nonce = 'ivyelite';
    const expireSecond = Math.floor(new Date().getTime()/1000) + 7200;
    const hashStr = `${process.env.VUE_APP_ROOMKIT_SECRETID}${process.env.VUE_APP_ROOMKIT_SECRETKEY}${nonce}${expireSecond}`;
    const hash = md5(hashStr);
    const appendUrl = 'auth/get_access_token';
    let tokeninfo = {
      var: 1,
      hash: hash,
      nonce: nonce,
      expired: expireSecond
    };
    let token = Buffer.from(JSON.stringify(tokeninfo)).toString('base64')
    console.log('get roomkit access token')
    return new Promise ((resolve, reject) => {
      axios({
        method: 'POST',
        url: `${process.env.VUE_APP_ROOMKIT_BASEURL}${appendUrl}`,
        data: {
          token: token,
          secret_id: Number(process.env.VUE_APP_ROOMKIT_SECRETID)
        }
      }).then( res => {
        if(res.data.ret.code == 0){
          let saveToLocal = {
            access_token: res.data.data.access_token,
            request_time: Math.floor(new Date().getTime()/1000)
          }
          localStorage.setItem('token-info', JSON.stringify(saveToLocal));
          resolve(res.data.data.access_token);
        }else{
          reject(res.data.ret.message);
        }
      })
    })
  }else{
    return new Promise ((resolve, reject) => {
      let access_token = JSON.parse(tryToken).access_token;
      resolve(access_token);
    })
  }
}

exports.createClass = async ctx => {
	let token = await getAccessToken();
  let { subject, room_type, duration, host, settings } = ctx.request.body;
  const appendUrl = 'room/create';
  console.log('roomkit create room')
  let res = await axios({
    method: 'POST',
    url: `${process.env.VUE_APP_EDUCLOUD_BASEURL}${appendUrl}`,
    data: {
      subject: subject,
      room_type: room_type,
      begin_timestamp: new Date().getTime() + 1000 * 600,  //10分钟后,
      duration: duration,
      host: host,
      settings: settings,
      pid: Number(process.env.VUE_APP_ROOMKIT_PRODUCTID),
      secret_id: Number(process.env.VUE_APP_ROOMKIT_SECRETID),
      access_token: token,
    }
  })
  if(res.data.ret.code == 0){
    ctx.body = {
			code: 200,
      message: '成功',
      data: res.data.data
		}
  }else{
    ctx.body = {
			code: 500,
			message: res.data
		}
  }
}

exports.getClass = async ctx => {

}



