/**
 * @description 登录验证的中间件
 * @author syy
 * 
 */
const { ErrorModel } = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/ErrorInfo')

/**
 * 登录中间件
 * @param {*} ctx 
 * @param {*} next 
 */
async function loginCheck(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    // 已登录
    await next()
    return
  }
  // 未登录
  ctx.body = new ErrorModel(loginCheckFailInfo)
}


module.exports = {
  loginCheck,
}