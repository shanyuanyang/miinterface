const router = require('koa-router')()

const { register, isExist, login, getUserInfo1, logout, changePassword } = require('../../controller/user')
const { loginCheck } = require('../../middlewares/loginChecks')
const { genValidator } = require('../../middlewares/validator')
const userValidate = require('../../validator/user')
router.prefix('/api/user')


// 注册路由
router.post('/register', genValidator(userValidate), async (ctx, next) => {
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

// 修改密码
router.patch('/changePassword', loginCheck, genValidator(userValidate), async (ctx, next) => {
  const { password, newPassword } = ctx.request.body
  ctx.body = await changePassword({ ctx, password, newPassword })

})

module.exports = router
