/** 
 * @description user controller
 * @author syy
*/
const { creatUser, getUserInfo } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameExistInfo, registerFailInfo } = require('../model/ErrorInfo')
/**
 * 用户注册
 * @param {string} userName 
 * @param {string} password 
 */
async function register(userName, password) {
  // services
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    // 用户名已存在
    return new ErrorModel(registerUserNameExistInfo)
  }

  try {
    await creatUser({
      userName,
      password: doCrypto(password),
    })
    console.log('new SuccessModel()----', new SuccessModel())

    return new SuccessModel()
  } catch (ex) {
    console.error(ex.message, ex.stack)
    return new ErrorModel(registerFailInfo)
  }

}


/**
 * 用户是否存在
 * @param {*} userName 
 */
async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  // console.log('userInfo-----', userInfo)
  if (userInfo) {
    return new SuccessModel(userInfo)
  } else {
    return new ErrorModel(registerUserNameNotExistInfo)
  }
}


module.exports = {
  register, isExist
}