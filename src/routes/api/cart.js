/** 
 * @description cart Api
 * @author syy
*/

const router = require('koa-router')()
const { loginCheck } = require('../../middlewares/loginChecks')
const { addCart } = require('../../controller/cart')

router.prefix('/api/cart')

// 添加商品到购物车
router.post('/addCart', loginCheck, async (ctx, next) => {
  const { goodId, number, totalPrice } = ctx.request.body
  ctx.body = await addCart({ ctx, goodId, number, totalPrice })

})



module.exports = router
