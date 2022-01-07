const stripeGate = require('stripe')('sk_test_51JzuEnJ1wNWalvad4ozFFmjhAeG9a89sFDCP64okVjvtKvvfTK0cJ9R3Fe8hssqLgKVMtH1Z2okSNzK5Fd9zPYXy00yUA4rzWo');
const endpointSecret = "whsec_CFGHbIhkWafwzMCpb8TBTt9wvOVZqzn7"
//"whsec_7an8Z5ahxHsex2T30vCSseiAFs5vItXR";
const relationModel = require('../model/relationModel')
const receiptModel = require('../model/receiptModel')

//create a stripe checkout session
exports.createCheckoutSession = async ctx => {
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
    success_url: 'https://online.ivyelite.net/#/payment/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://online.ivyelite.net/#/payment/cancel',
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
    await relationModel.setUserClassRelation([user_uid, class_id, 1, 0]).then(res => {
      receiptModel.createReceipt([class_id, user_uid, new Date().getTime(), amount_total ]).then(res => {
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

