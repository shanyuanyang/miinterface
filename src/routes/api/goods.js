/** 
 * @description good Api
 * @author syy
*/


const router = require('koa-router')()
const {
  loginCheck
} = require('../../middlewares/loginChecks')
const {
  addGood,
  goodList,
  getGoodDetail,
  deleteGood,
  updateGood
} = require('../../controller/good')


router.prefix('/api/good')

// 添加商品
router.post('/addGood', async (ctx, next) => {
  const {
    name,
    subName,
    picture,
    price,
    stock,
    introduce
  } = ctx.request.body
  ctx.body = await addGood({
    name,
    subName,
    picture,
    price,
    stock,
    introduce
  })
})

// 首页商品列表
router.get('/list/:pageIndex/:pageSize', async (ctx, next) => {
  let {
    pageIndex,
    pageSize
  } = ctx.params
  pageIndex = parseInt(pageIndex)
  pageSize = parseInt(pageSize)

  ctx.body = await goodList(pageIndex, pageSize)
})

// 商品详情
router.get('/detail/:id', async (ctx, next) => {
  const {
    id
  } = ctx.params
  console.log(id)
  ctx.body = await getGoodDetail(id)
})
// 删除商品
router.delete('/deleteGood/:id', async (ctx, next) => {
  const {
    id
  } = ctx.params
  console.log(id)
  ctx.body = await deleteGood(id)
})

// 修改商品
router.post('/updateGood/:id', loginCheck, async (ctx, next) => {
  const {
    id
  } = ctx.params
  const {
    name,
    subName,
    introduce,
    price,
    stock,
    picture } = ctx.request.body
  ctx.body = await updateGood({ ctx, id }, {
    name,
    subName,
    introduce,
    price,
    stock,
    picture
  })
})
module.exports = router