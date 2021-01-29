/** 
 * @description 购物车数据模型
 * @syy
 */

const seq = require('../seq')
const { INTEGER, FLOAT } = require('../types')

// users
const Cart = seq.define('cart', {
  goodId: {
    type: INTEGER,
    allowNull: true,
    comment: '商品id'
  },
  number:{
    type: INTEGER,
    allowNull: true,
    comment: '数量'
  },
  userId: {
    type: INTEGER,
    allowNull: true,
    comment: '用户Id'
  },
  totalPrice:{
    type:FLOAT,
    allowNull:true,
    comment:'总价'
  },
})

module.exports = Cart