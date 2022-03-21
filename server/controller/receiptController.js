const receiptModel = require('../model/receiptModel')

exports.createReceipt = async ctx => {
	let { class_id, user_uid, create_timestamp, amount, processed } = ctx.request.body;
	await receiptModel.createReceipt([class_id, user_uid, create_timestamp, amount, processed ]).then(res => {
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

exports.getReceiptByUid = async ctx => {
	let {user_uid} = ctx.request.query
	await receiptModel.getReceiptByUid(user_uid).then( (res) => {
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

exports.getAllUserReceipt = async ctx => {
	await receiptModel.getAllUserReceipt().then( (res) => {
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