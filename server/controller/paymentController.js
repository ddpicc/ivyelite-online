const stripeGate = require('stripe')(process.env.VUE_APP_STRIPE_APIKEY);
const endpointSecret =  process.env.VUE_APP_STRIPE_WEBHOOKKEY_LOCAL

//const endpointSecret = process.env.VUE_APP_STRIPE_WEBHOOKKEY_PROD

//"whsec_7an8Z5ahxHsex2T30vCSseiAFs5vItXR";
const relationModel = require('../model/relationModel')
const receiptModel = require('../model/receiptModel')
const courseModel = require('../model/courseModel')

//create a stripe checkout session
exports.createCheckoutSession = async ctx => {
  let baseurl = 'http://localhost:8080/#'

  //let baseurl = 'https://online.ivyelite.net/#'

  let { price_id, quantity,class_id,user_uid } = ctx.request.body;
  const session = await stripeGate.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: price_id,
        quantity: quantity,
      },
    ],
    mode: 'payment',
    success_url: baseurl + '/course/explore/gresmallclass?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: baseurl + '/payment/cancel',
    metadata: {
      class_id: class_id,
      user_uid: user_uid
    },
  });

  ctx.body = {
    code: 303,
    url: session.url
  }
}


exports.paymentNotifyReceive = async ctx => {
  const payload = ctx.request.rawBody;
  const sig = ctx.request.headers['stripe-signature'];

  let event;

  try {
    event = stripeGate.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    console.log(err.message)
    ctx.body = {
      status: 400,
			code: 400,
			message: `Webhook Error: ${err.message}`
		}
    return
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    console.log('capture payment')
    const session = event.data.object;
    
    //fullfil the order
    const user_uid = session.metadata.user_uid;
    const class_id = session.metadata.class_id;
    const amount_total = session.amount_total;
    let processed = 1
    if(class_id == 1 || class_id == 2){
      processed = 0
    }
    await relationModel.setUserClassRelation([user_uid, class_id, 1, 0])
    await courseModel.updateClassSeat([class_id])
    await receiptModel.createReceipt([class_id, user_uid, new Date().getTime(), amount_total, processed ]).then(res => {
      console.log('payment success')
      ctx.status = 200
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
},

exports.retriveSessionInfo = async ctx => {
  let { stripe_session_id } = ctx.request.query;
  try {
    const session = await stripeGate.checkout.sessions.retrieve(stripe_session_id);
    let result = {
      ...session.metadata,
      'amount_total': session.amount_total,
    }
    ctx.body = {
      code: 200,
      data: result,
    }
  } catch (err) {
    console.log(err.message)
    ctx.body = {
      status: 400,
			code: 400,
			message: `Webhook Error: ${err.message}`
		}
  }
}

