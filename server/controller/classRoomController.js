const md5 = require('md5')
const axios = require('axios')
const request = require('request')
const classRoomModel = require('../model/roomModel.js')
const dotenv = require('dotenv')
const KJUR = require('jsrsasign')

dotenv.config({ path: '../.env'})
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

//check if the token is expired, if expired, re get token
function tokenExpired(loadFromLocal) {
  let request_time = JSON.parse(loadFromLocal).request_time;
  if(Math.floor(new Date().getTime()/1000) - request_time < 3600){
    return false;
  }else{
    return true;
  }
}

//save the room information to db
exports.saveRoomInfoToDb = async ctx => {
	let { class_id, subject, room_id, password, status } = ctx.request.body;
	await classRoomModel.saveRoomInfoToDb([class_id, subject, room_id, password,status]).then(res => {
		ctx.body = {
			code: 200,
      message: '成功',
      data: res
		}
	}).catch(err => {
		console.log(err)
		ctx.body = {
			code: 500,
			message: '失败'
		}
	})
}

exports.searchRoomInfoFromDb = async ctx => {
  let {class_id, status} = ctx.request.query
	await classRoomModel.searchRoomInfoFromDb(class_id, status).then( (res) => {
    //check if the room is expired
    //default duration is 90 mins
		ctx.body = {
			code: 200,
      message: '成功',
      data: res
		}
	}).catch(err => {
		console.log(err)
		ctx.body = {
			code: 500,
			message: '失败'
		}
	})
}

//save the room information to db
exports.deleteRoomFromDb = async ctx => {
	let { id } = ctx.request.query;
	await classRoomModel.deleteRoomFromDb(id).then(res => {
		ctx.body = {
			code: 200,
      message: '成功',
      data: res
		}
	}).catch(err => {
		console.log(err)
		ctx.body = {
			code: 500,
			message: '失败'
		}
	})
}


exports.updateRoomStatus = async ctx => {
	let { status, id } = ctx.request.body;
	await classRoomModel.updateRoomStatus([status, id]).then( (res) => {
		ctx.body = {
			code: 200,
      message: '成功',
      data: res
		}
	}).catch(err => {
		console.log(err)
		ctx.body = {
			code: 500,
			message: '失败'
		}
	})
}

exports.createZoomClass = async ctx => {
  let { subject, password } = ctx.request.body;  
  const zoomToken = localStorage.getItem('zoom-token');
  let _access_token = JSON.parse(zoomToken).access_token;
  let res = await axios({
    method: 'POST',
    url: 'https://api.zoom.us/v2/users/me/meetings',
    headers: {
      Authorization: "Bearer " + _access_token,
    },
    data: {
      agenda: "My Meeting",
      default_password: false,
      password: password,
      pre_schedule: false,
      topic: subject
    }
  })
  if(res.status == 201){
    ctx.body = {
			code: 200,
      message: '成功',
      data: res.data
		}
  }else{
    ctx.body = {
			code: 500,
			message: res.data.message
		}
  }
}

exports.getZoomAccessToken = async ctx => {
  const zoomToken = localStorage.getItem('zoom-token');
  if(!zoomToken || tokenExpired(zoomToken)){
    console.log('redirect to get zoom access token')
    //redirect
    ctx.body = {
      code: 201,
      message: 'redirect'
    }    
  }else{
    ctx.body = {
      code: 200,
      message: '成功',
    }  
  }
}

exports.handleAuthcode = async ctx => {
  let { code } = ctx.request.query;
  console.log('get authcode ' + code)

  var options = {
    method: 'POST',
    url: 'https://zoom.us/oauth/token',
    qs: {
      grant_type: 'authorization_code',
      //The code below is a sample Authorization Code. Replace it with your actual Authorization Code while making requests.
      code: code,
      //The uri below is a sample redirect_uri. Replace it with your actual redirect_uri while making requests.
      redirect_uri: 'https://online.ivyelite.net/classroom/zoomauth',
    },
    headers: {
       'Authorization': 'Basic ' + Buffer.from(process.env.VUE_APP_ZOOM_CLIENTID + ':' + process.env.VUE_APP_ZOOM_CLIENTSECRET).toString('base64'),
    },
  };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    let jsonresult = JSON.parse(body)
    let saveToLocal = {
      access_token: jsonresult.access_token,
      refresh_token: jsonresult.refresh_token,
      request_time: Math.floor(new Date().getTime()/1000)
    }
    localStorage.setItem('zoom-token', JSON.stringify(saveToLocal));
  });

  ctx.redirect('https://online.ivyelite.net/#/admin/allclasses');
}

exports.getZakToken = async ctx => {
  const zakToken = localStorage.getItem('zak-token');
  if(!zakToken || tokenExpired(zakToken)){
    console.log('get zoom zak token')
    const zoomToken = localStorage.getItem('zoom-token');
    let _access_token = JSON.parse(zoomToken).access_token;
    let res = await axios({
      method: 'GET',
      url: 'https://api.zoom.us/v2/users/me/token?type=zak',
      headers: {
        Authorization: "Bearer " + _access_token,
      },
    })
    if(res.status == 200){
      console.log('get zak token: ' + res.data.token)
      let saveToLocal = {
        zak_token: res.data.token,
        request_time: Math.floor(new Date().getTime()/1000)
      }
      localStorage.setItem('zak-token', JSON.stringify(saveToLocal));
      ctx.body = {
        code: 200,
        message: '成功',
        data: res.data.token
      }
    }else{
      ctx.body = {
        code: 500,
        message: res.data.message,
      }
    }
  }else{    
    let _zakToken = JSON.parse(zakToken).zak_token;
    ctx.body = {
      code: 200,
      message: '成功',
      data: _zakToken
    }  
  }
}

exports.getSignature = async ctx => {
  const iat = Math.round(new Date().getTime() / 1000) - 30;
  const exp = iat + 60 * 60 * 2

  const oHeader = { alg: 'HS256', typ: 'JWT' }

  const oPayload = {
    sdkKey: process.env.VUE_APP_ZOOM_SDK_KEY,
    mn: ctx.request.body.meetingNumber,
    role: ctx.request.body.role,
    iat: iat,
    exp: exp,
    appKey: process.env.VUE_APP_ZOOM_SDK_KEY,
    tokenExp: iat + 60 * 60 * 2
  }

  const sHeader = JSON.stringify(oHeader)
  const sPayload = JSON.stringify(oPayload)
  const signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, process.env.VUE_APP_ZOOM_SDK_SECRET)
  ctx.body = {
    code: 200,
    message: '成功',
    data: signature
  }
}


