const Koa = require('koa')
const koaBody = require('koa-body')
const config = require('./config/db.js')
const cors = require('koa2-cors')
const koajwt = require('koa-jwt')
const app = new Koa()


//路由白名单
const origin = []// 允许来自所有域名请求

app.use(cors({
  origin: function (ctx) {
    console.log(ctx.url)
    if (origin.includes(ctx.url)) {
      return ctx.request.header.origin; 
    }
    //本地测试用
    return 'http://localhost:8080';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'content-type', 'X-PINGOTHER'],
}))

app.use(koaBody());

// 中间件对token进行验证
app.use(async (ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: 'Request fail, protected resource, use Authorization header to get access'
      }
    } else {
      throw err;
    }
  })
})

app.use(koajwt({ secret: 'Ivyelite Token' }).unless({
  // 登录接口不需要验证
  path: [/^\/userApi\/signin/,/^\/userApi\/insertUser/,/^\/courseApi\/getAllCourses/,/^\/courseApi\/findOneCourseById/,/^\/userApi\/findDataCountByUid/]
}));

//  路由
app.use(require('./routers/userRouter.js').routes())
app.use(require('./routers/courseRouter.js').routes())
app.use(require('./routers/classRoomRouter.js').routes())
app.use(require('./routers/relationRouter.js').routes())


app.listen(config.port)

console.log(`listening on port ${config.port}`)