const router = require('koa-router')()
const { loginCheck } = require('../../middlewares/loginChecks')
const { addGood } = require('../../controller/good')


router.prefix('/api/good')

// 添加商品
router.post('/addGood', loginCheck, async (ctx, next) => {
  const { name, subname, picture, price, stock, introduce } = ctx.request.body
  ctx.body = await addGood({ name, subname, picture, price, stock, introduce })
})


module.exports = router
