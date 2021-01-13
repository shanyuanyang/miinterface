/** 
 * @description 订单数据模型
 * @syy
 */

const seq = require('../seq')
const { INTEGER, BOOLEAN } = require('../types')

// users
const Order = seq.define('order', {
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
  cartId: {
    type: INTEGER,
    allowNull: false,
    comment: '购物车Id'
  }
})

module.exports = Order