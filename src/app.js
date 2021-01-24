const Koa = require('koa')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const logger = require('koa-logger')
const koaStatic = require('koa-static')

const {
  REDIS_CONF
} = require('./conf/db')
const {
  isProd
} = require('./utils/env')
const {
  SESSION_SECRET_KEY
} = require('./conf/secretKeys')

// 路由
const users = require('./routes/api/users')
const goods = require('./routes/api/goods')
const utils = require('./routes/api/utils')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))
app.use(koaStatic(path.join(__dirname, '..', 'uploadFiles')))


app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// session 配置
app.keys = [SESSION_SECRET_KEY]
app.use(session({
  key: 'mi.sid', // cookie name 默认是 `koa.sid`
  prefix: 'mi:sess:', // redis key 的前缀，默认是 `koa:sess:`
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 单位 ms
  },
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))

// routes
app.use(users.routes(), users.allowedMethods())
app.use(goods.routes(), goods.allowedMethods())
app.use(utils.routes(), utils.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
