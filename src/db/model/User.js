/** 
 * @description 用户数据模型
 * @syy
 */

const seq = require('../seq')
const { STRING, INTEGER } = require('../types')

// users
const User = seq.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码'
  },
  cartId: {
    type: INTEGER,
    allowNull: true,
    comment: '购物车id'
  },
  addressId: {
    type: INTEGER,
    allowNull: true,
    comment: '收货地址Id'
  },
  orderId: {
    type: INTEGER,
    allowNull: true,
    comment: '订单Id'
  }
})

module.exports = User