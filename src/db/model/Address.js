/** 
 * @description 收货地址数据模型
 * @syy
 */

const seq = require('../seq')
const { STRING, INTEGER } = require('../types')

// users
const Address = seq.define('address', {
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户Id'
  },
  name: {
    type: STRING,
    allowNull: false,
    comment: '收货人姓名'
  },
  phoneNumber: {
    type: INTEGER,
    allowNull: false,
    comment: '电话'
  },
  postcode: {
    type: INTEGER,
    allowNull: false,
    comment: '邮编'
  },
  address: {
    type: STRING,
    allowNull: false,
    comment: '地址'
  }

})

module.exports = Address