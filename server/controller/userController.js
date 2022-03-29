const userModel = require('../model/userModel.js')
const jsonwebtoken = require('jsonwebtoken')
const mail_util = require('../utils/nodemailer')
const qiniu_util = require('../utils/qiniuUpload')

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

exports.updateUserName = async ctx => {
	let { name, uid } = ctx.request.body;
	await userModel.updateUserName([name, uid]).then( (res) => {
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

exports.postSignin = async ctx => {
	let { email, password } = ctx.request.body;
	await userModel.findUserByEmail(email).then(result => {
		let res = result;
		if (res.length && password === res[0]['pass']) {
			ctx.body = {
				code: 200,
				msg: '登录成功',
				token: jsonwebtoken.sign(
					{email: res[0].email, id: res[0].id},
					'Ivyelite Token',
					{expiresIn: '6h'}
				),
				data: res,
			}
			console.log('登录成功')		
		} else {
			ctx.body = {
				code: 500,
				msg: '用户名或密码错误'
			}
			console.log('用户名或密码错误!')
		}
	}).catch(err => {
		console.log(err)
	})
}

exports.getUserInfoByUid = async ctx => {
	let {uid} = ctx.request.query
	await userModel.getUserInfoByUid(uid).then( (res) => {
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

exports.updateUserProfile = async ctx => {
	let { name, sex, education, school, birth, uid } = ctx.request.body;
	await userModel.updateUserProfile([name, sex, education, school, birth, uid]).then( (res) => {
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

exports.findDataCountByUid = async ctx => {
	let {uid} = ctx.request.query
	await userModel.findDataCountByUid(uid).then( (res) => {
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

exports.findDataCountByName = async ctx => {
	let {name} = ctx.request.query
	await userModel.findDataCountByName(name).then( (res) => {
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

exports.insertUser = async ctx => {
	let { username, email, password, uid, register_time } = ctx.request.body;
	let avatar_url = 'FuObl8yKxcftADmihsFi-tRLWW_O'    //default avatar when register
	await userModel.insertUser([username, email, password, uid, register_time, avatar_url]).then( (res) => {
		console.log(res)
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

function randChar(length,characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  //length为所需长度，characters为所包含的所有字符，默认为字母+数字。
  characters=characters.split("");//分割字符。
  var result="";//返回的结果。
  while(result.length<length) result+=characters[Math.floor(Math.random()*characters.length)];
  return result;
}

exports.sendActivateEmail = async ctx => {
	let { email} = ctx.request.body;
	let randcode = randChar(4,'0123456789');
	
	let content = `<div>感谢您注册常青藤在线教育账号，${randcode}是您的验证码</div><br>
                            <br>                            
                            <div>若您未申请注册常青藤在线教育账号，请忽略此邮件。</div>`
	await mail_util.mail(email,'常青藤教育',content).then( (res) => {
		console.log('send email to ' + email)
		localStorage.setItem(email, randcode);
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

exports.verifyActivateCode = async ctx => {
	let { email, code} = ctx.request.body;
	let _code = localStorage.getItem(email);
	
	if(_code == code){
		ctx.body = {
			code: 200,
      message: '成功',
		}
	}else{
		ctx.body = {
			code: 500,
			message: '失败'
		}
	}
}

exports.findCountByEmail = async ctx => {
	let {email} = ctx.request.query
	await userModel.findCountByEmail(email).then( (res) => {
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

exports.getQiniuToken = async ctx => {
	ctx.body = {
		code: 200,
		message: '成功',
		data: qiniu_util.generateUploadToken(),
	}
}

exports.updateUserAvatar = async ctx => {
	let { avatar_url, uid } = ctx.request.body;
	await userModel.updateUserAvatar([avatar_url, uid]).then( (res) => {
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

exports.getAllUsers = async ctx => {
	await userModel.getAllUsers().then( (res) => {
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