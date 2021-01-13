/**
 * @description 数据模型入口文件
 * @author syy
 */

const User = require('./User')
const Address = require('./Address')
const Commodity = require('./Commodity')
const Cart = require('./Cart')


// // blog表有外键
// Blog.belongsTo(User, {
//   foreignKey: 'userId'
// })

// // UserRelation表有外键
// UserRelation.belongsTo(User, {
//   foreignKey: 'followerId'
// })

// User.hasMany(UserRelation, {
//   foreignKey: 'userId'
// })

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
  Cart
}