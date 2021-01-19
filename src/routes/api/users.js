const router = require('koa-router')()

const { register, isExist, login, getUserInfo1, logout } = require('../../controller/user')
const { loginCheck } = require('../../middlewares/loginChecks')
router.prefix('/api/user')


// 注册路由
router.post('/register', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  console.log('userName,password----', userName + '----' + password)
  ctx.body = await register(userName, password)

})

//用户是否存在
router.post('/isexist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)

})

// 登录
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

// 获取用户信息
router.get('/userInfo', loginCheck, async (ctx, next) => {
  ctx.body = await getUserInfo1(ctx)
})


// 退出登录
router.post('/logout', loginCheck, async (ctx, next) => {
  ctx.body = await logout(ctx)
})

module.exports = router
