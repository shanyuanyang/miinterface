/**
 * @description 数据格式化
 * @author syy
 */

const {
  timeFormat
} = require('../utils/dt')


/**
 * 格式化数据的时间
 * @param {Object} obj 数据
 */
function formatDBTime(obj) {
  // console.log('obj----', obj)
  obj.createdAtFormat = timeFormat(obj.createdAt)
  obj.updatedAtFormat = timeFormat(obj.updatedAt)
  // console.log('obj11----', obj)
  return obj
}

module.exports = {
  formatDBTime
}