const router = require('koa-router')()

const { register, isExist } = require('../../controller/user')

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



module.exports = router
