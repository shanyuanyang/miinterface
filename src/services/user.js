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
    attributes: ['userName', 'cartId', 'addressId', 'orderId'],
    where: whereOpt
  })
  if (result == null) {
    return result
  }
  return result.dataValuts
}


async function creatUser({ usreName, password }) {
  const result = await User.creat({
    userName, password
  })
  return result.dataValuts

}

module.exports = {
  getUserInfo,
  creatUser
}