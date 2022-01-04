const userModel = require('../model/userModel.js')
const jsonwebtoken = require('jsonwebtoken')
const mail_util = require('../utils/nodemailer')
const qiniu_util = require('../utils/qiniuUpload')

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
		if (res.length && email === res[0]['email'] && password === res[0]['pass']) {
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
				code: 400,
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

exports.insertUser = async ctx => {
	let { email, password, uid, register_time } = ctx.request.body;
	let defaultName = '用户'
	await userModel.insertUser([defaultName, email, password, uid, register_time]).then( (res) => {
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

exports.sendActivateEmail = async ctx => {
	let { email, content} = ctx.request.body;
	await mail_util.mail(email,'激活邮件',content).then( (res) => {
		console.log('send email to ' + email)
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

exports.activeUser = async ctx => {
	let { is_active, uid, email } = ctx.request.body;
	await userModel.activeUser([is_active, uid, email]).then( (res) => {
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