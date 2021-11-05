const userModel = require('../model/userModel.js')
const jsonwebtoken = require('jsonwebtoken')

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
					{expiresIn: '1h'}
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

exports.postSignup = async ctx => {
	ctx.body = {
		msg: 'test signup'
	}
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