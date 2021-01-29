/** 
 * @description 订单数据模型
 * @syy
 */

const seq = require('../seq')
const { INTEGER, FLOAT } = require('../types')

// users
const Order = seq.define('order', {
  goodId: {
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
  },
  totalPrice: {
    type: FLOAT,
    allowNull: true,
    comment: '总价'
  }
})

module.exports = Order