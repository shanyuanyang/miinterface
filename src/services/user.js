/**   
 * @description user services
 * @author syy
*/

const User = require('../db/model/User')

/**
 * 获取用户信息
 * @param {*} userName 
 * @param {*} password 
 */
async function getUserInfo(userName, password) {
  // 查询条件
  let whereOpt = {
    userName
  }
  if (password) {
    Object.assign(whereOpt, { password })
  }
  // 查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'cartId', 'addressId', 'orderId'],
    where: whereOpt
  })
  // console.log('result---', result)
  if (result == null) {
    return result
  }
  return result.dataValues
}

/**
 * 创建用户
 * @param {*} param0 
 */
async function creatUser({ userName, password }) {
  const result = await User.create({
    userName, password
  })
  // console.log('result.dataValuts----', result.dataValuts)
  return result.dataValues

}

/**
 * 修改用户信息
 * @param {*} param0 
 */
async function updateUser({ userName, password, newPassword }) {

  // 需要修改的信息
  let updateData = {}
  if (newPassword) {
    updateData.password = newPassword
  }

  // 修改条件
  let whereData = {}
  if (userName) {
    whereData.userName = userName
  }
  if (password) {
    whereData.password = password
  }
  const result = await User.update(updateData, { where: whereData })
  return result[0] > 0 //修改行数大于 0  说明修改成功
}

module.exports = {
  getUserInfo,
  creatUser,
  updateUser
}