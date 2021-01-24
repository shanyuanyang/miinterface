/** 
 * @description 商品controller
 * @author syy
 */

const {
  createGood,
  getHomeGoodList,
  findGoodDetail,
  deleteCurGood
} = require('../services/good')
const {
  SuccessModel,
  ErrorModel
} = require('../model/ResModel')
const {
  createBlogFailInfo,
  deleteGoodMsg
} = require('../model/ErrorInfo')

/**
 * 添加商品
 * @param {*} param0 
 */
async function addGood({
  name,
  subName,
  picture,
  price,
  stock,
  introduce,
}) {
  try {
    const blog = await createGood({
      name,
      subName,
      picture,
      price,
      stock,
      introduce
    })
    return new SuccessModel(blog)
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(createBlogFailInfo)
  }
}

/**
 * 首页商品列表
 * @param {*} pageIndex 
 * @param {*} pageSize 
 */
async function goodList(pageIndex, pageSize) {
  const result = await getHomeGoodList(pageIndex, pageSize)
  const {
    count,
    goodList
  } = result

  // 返回
  return new SuccessModel({
    isEmpty: goodList.length === 0,
    goodList,
    pageSize,
    pageIndex,
    count
  })
}


/**
 * 商品详情
 * @param {*} id 
 */
async function getGoodDetail(id) {
  const result = await findGoodDetail(id)
  return new SuccessModel(result)
}

/**
 * 商品详情
 * @param {*} id 
 */
async function deleteGood(id) {
  const result = await deleteCurGood(id)
  if(!result){
    return new ErrorModel(deleteGoodMsg)
  }
  return new SuccessModel()
}


module.exports = {
  addGood,
  goodList,
  getGoodDetail,
  deleteGood
}