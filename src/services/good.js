/** 
 * @description 商品service
 * @author syy
 */

const {
  Good
} = require('../db/model/index')
const {
  formatDBTime
} = require('./_format')
/**
 * 添加商品
 * @param {*} param0 
 */
async function createGood({
  name,
  subName,
  picture,
  price,
  stock,
  introduce
}) {
  const result = await Good.create({
    name,
    subName,
    picture,
    price,
    stock,
    introduce
  })
  return result.dataValues
}

/**
 * 首页商品列表
 * @param {*} pageIndex 
 * @param {*} pageSize 
 */
async function getHomeGoodList(pageIndex, pageSize) {
  const result = await Good.findAndCountAll({
    limit: pageSize, //每页数量
    offset: pageSize * (pageIndex - 1), //跳过多少条
    order: [
      ['id', 'desc']
    ]
  })
  // 格式化数据
  let goodList = result.rows.map(row => row.dataValues)
  console.log('goodList---', goodList)
  // goodList = formatBlog(blogList)
  goodList = goodList.map(goodItem => {
    return goodItem = formatDBTime(goodItem)
  })

  return {
    count: result.count,
    goodList
  }
}

/**
 * 商品详情
 * @param {*} id 
 */
async function findGoodDetail(id) {
  const result = await Good.findOne({
    attributes: ['id', 'name', 'subName', 'introduce', 'picture', 'price', 'stock', ],
    where: {
      id
    }
  })
  if (result == null) {
    return result
  }
  return result.dataValues
}

/**
 * 删除商品
 * @param {*} id 
 */
async function deleteCurGood(id) {
  const res = await Good.destroy({
    where: {
      id
    }
  })
  return res > 0
}

module.exports = {
  createGood,
  getHomeGoodList,
  findGoodDetail,
  deleteCurGood
}