/**
 * @description 数据模型入口文件
 * @author syy
 */

const User = require('./User')
const Address = require('./Address')
const Commodity = require('./Commodity')
const Cart = require('./Cart')
const Order = require('./Order')


// Address表有外键
Address.belongsTo(User, {
  foreignKey: 'userId'
})

// Cart表有外键
Cart.belongsTo(User, {
  foreignKey: 'userId'
})

// Order表有外键
Order.belongsTo(User, {
  foreignKey: 'userId'
})

// Blog.belongsTo(UserRelation, {
//   foreignKey: 'userId',
//   targetKey: 'followerId'
// })

// Blog.hasMany(AtRelation, {
//   foreignKey: 'blodId'
// })

module.exports = {
  User,
  Address,
  Commodity,
  Cart,
  Order
}