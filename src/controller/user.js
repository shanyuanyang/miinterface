/** 
 * @description user controller
 * @author syy
*/
const { creatUser, getUserInfo, updateUser } = require('../services/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameExistInfo, registerFailInfo, registerUserNameNotExistInfo, loginFailInfo, changePasswordFailInfo } = require('../model/ErrorInfo')
const doCrypto = require('../utils/cryp')
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
  if (userInfo) {
    return new SuccessModel(userInfo)
  } else {
    return new ErrorModel(registerUserNameNotExistInfo)
  }
}

/**
 * 用户登录
 * @param {*} ctx 
 * @param {*} userName 
 * @param {*} password 
 */
async function login(ctx, userName, password) {
  const userInfo = await getUserInfo(userName, doCrypto(password))
  console.log('userInfo----', userInfo)
  if (!userInfo) {
    return new ErrorModel(loginFailInfo)
  }
  if (ctx.session.userInfo == null) {
    ctx.session.userInfo = userInfo
  }
  return new SuccessModel(userInfo)

}

/**
 * 单独获取用户信息接口
 */
async function getUserInfo1(ctx) {
  return new SuccessModel(ctx.session.userInfo)
}

/**
 * 退出登录
 * @param {*} ctx 
 */
async function logout(ctx) {
  delete ctx.session.userInfo
  return new SuccessModel()
}

/**
 * 修改密码
 * @param {*} param0 
 */
async function changePassword({ ctx, password, newPassword }) {
  const { userName } = ctx.session.userInfo
  const result = await updateUser({ userName, password: doCrypto(password), newPassword: doCrypto(newPassword) })
  console.log('result',result)
  if (result) {
    return new SuccessModel()
  }
  return new ErrorModel(changePasswordFailInfo)
}


module.exports = {
  register, isExist, login, getUserInfo1, logout, changePassword
}