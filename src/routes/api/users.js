const router = require('koa-router')()

router.prefix('/api/user')


// 注册路由
router.post('/register', function (ctx, next) {
  const { userName, password } = ctx.request.body
  // controller
  
})



module.exports = router
