const infoModel = require('../model/infoModel')
const axios = require('axios')

exports.saveContactConfig = async ctx => {
	let { contact_phone, contact_wechat, contact_email, qr_code } = ctx.request.body;
	await infoModel.saveContactConfig([ contact_phone, contact_wechat, contact_email, qr_code ]).then(res => {
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

exports.loadConfig = async ctx => {
	await infoModel.loadConfig().then(res => {
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

exports.saveToColInfo = async ctx => {
	let { user_name, wechat, user_email, class_id, user_uid, origin } = ctx.request.body;
	await infoModel.saveToColInfo([ user_name, wechat, user_email, class_id, user_uid, origin ]).then(res => {
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

exports.uploadContactQRCode = async ctx => {
	let { token, url } = ctx.request.body;
	const res = await axios.post('https://upload-na0.qiniup.com/putb64/-1/', url, {
		headers: {
			'Content-Type': 'application/octet-stream',
			'Authorization': 'UpToken ' + token,
		}
	})
  if(res.data.key){
    ctx.body = {
			code: 200,
      message: '成功',
      data: res.data.key
		}
  }else{
    ctx.body = {
			code: 500,
			message: res.data
		}
  }
}