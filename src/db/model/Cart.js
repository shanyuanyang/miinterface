/** 
 * @description 购物车数据模型
 * @syy
 */

const seq = require('../seq')
const { INTEGER, BOOLEAN } = require('../types')

// users
const Cart = seq.define('cart', {
  commodityId: {
    type: INTEGER,
    allowNull: true,
    comment: '商品id'
  },
  userId: {
    type: INTEGER,
    allowNull: true,
    comment: '用户Id'
  },
})

module.exports = Cart