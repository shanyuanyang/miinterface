/** 
 * @description cart Api
 * @author syy
*/

const router = require('koa-router')()
const { loginCheck } = require('../../middlewares/loginChecks')

router.prefix('/api/cart')

router.post('/addCart', loginCheck, async (ctx, next) => {
  
})


module.exports = router
