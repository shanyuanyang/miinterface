/** 
 * @description controller cart
 * @author syy
*/

const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { addCartMsg } = require('../model/ErrorInfo')
const { creatCart } = require('../services/cart')
/**
 * 添加购物车
 * @param {*} goodId  商品id
 */
async function addCart({ ctx, goodId, number, totalPrice }) {
  const { userId } = ctx.session.userInfo
  try {
    const result = await creatCart({ userId, goodId, number, totalPrice })
    if (!result) {
      return new ErrorModel(addCartMsg)
    }
    return new SuccessModel()
  } catch (error) {

  }

}

module.exports = {
  addCart
}