const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const config = require('./config/db.js')
const cors = require('koa2-cors')
const koajwt = require('koa-jwt')
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = new Koa();
const httpServer = createServer(app.callback());
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

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

app.use(BodyParser());

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
  path: [/^\/userApi\/signin/,/^\/userApi\/insertUser/,/^\/userApi\/sendActivateEmail/,/^\/userApi\/verifyActivateCode/,/^\/userApi\/updateUserPass/,
    /^\/userApi\/findDataCountByUid/,/^\/userApi\/findCountByEmail/,/^\/userApi\/findDataCountByName/,/^\/courseApi\/findOneClassById/,
    /^\/courseApi\/getAllCourses/,/^\/courseApi\/getAllClasses/,/^\/courseApi\/getClassesbyCourseId/,/^\/relationApi\/isClassReserved/,
    /^\/infoApi\/loadConfig/,/^\/classroom\/searchRoomByClassId/,/^\/infoApi\/saveToColInfo/,
    /^\/payment\/webhook/,/^\/classroom\/zoomauth/,/^\/classroom\/getSignature/]
}));

//  路由
app.use(require('./routers/userRouter.js').routes())
app.use(require('./routers/courseRouter.js').routes())
app.use(require('./routers/classRoomRouter.js').routes())
app.use(require('./routers/relationRouter.js').routes())
app.use(require('./routers/paymentRouter.js').routes())
app.use(require('./routers/receiptRouter.js').routes())
app.use(require('./routers/infoRouter.js').routes())
app.use(require('./routers/examRouter.js').routes())

io.on("connection", (socket) => {
  // ...
  console.log('connect')
  socket.on('classcreated', data => {
    console.log('管理员已经创建课程', data)
    socket.broadcast.emit("classopen", data);
  })
  socket.on('classdeleted', data => {
    console.log('管理员已经删除课程', data)
    socket.broadcast.emit("classclose", data);
  })
});


httpServer.listen(config.port)

console.log(`listening on port ${config.port}`)