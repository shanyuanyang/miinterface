/**
 * @description 失败信息集合，包括 errno 和 message
 * @author syy
 */

module.exports = {
  // 用户名已存在
  registerUserNameExistInfo: {
    errno: 10001,
    message: '用户名已存在'
  },
  // 注册失败
  registerFailInfo: {
    errno: 10002,
    message: '注册失败，请重试'
  },
  // 用户名不存在
  registerUserNameNotExistInfo: {
    errno: 10003,
    message: '用户名未存在'
  },
  // 登录失败
  loginFailInfo: {
    errno: 10004,
    message: '登录失败，用户名或密码错误'
  },
  // 未登录
  loginCheckFailInfo: {
    errno: 10005,
    message: '您尚未登录'
  },
  // 修改密码失败
  changePasswordFailInfo: {
    errno: 10006,
    message: '修改密码失败，请重试'
  },
  // 上传文件过大
  uploadFileSizeFailInfo: {
    errno: 10007,
    message: '上传文件尺寸过大'
  },
  // 修改基本信息失败
  changeInfoFailInfo: {
    errno: 10008,
    message: '修改基本信息失败'
  },
  // json schema 校验失败
  jsonSchemaFileInfo: {
    errno: 10009,
    message: '数据格式校验错误'
  },
  // 删除用户失败
  deleteUserFailInfo: {
    errno: 10010,
    message: '删除用户失败'
  },
  // 添加商品到购物车失败
  addCart: {
    errno: 10011,
    message: '添加购物车失败'
  },
  // 下订单失败
  makeOrder: {
    errno: 10012,
    message: '下订单失败'
  },
  // 支付失败
  orderPay: {
    errno: 10013,
    message: '支付失败'
  },
  getOrderList: {
    errno: 10014,
    message: '获取订单列表失败'
  },
  clearCart: {
    errno: 10015,
    message: '删除购物车失败'
  },
  deleteGoodMsg: {
    errno: 10016,
    message: '删除商品失败'
  }
}