/** 
 * @description 商品数据模型
 * @syy
 */

const seq = require('../seq')
const { STRING, FLOAT, INTEGER } = require('../types')

// users
const Good = seq.define('good', {
  name: {
    type: STRING,
    allowNull: false,
    comment: '商品名字'
  },
  subName: {
    type: STRING,
    allowNull: false,
    comment: '商品二级名字'
  },
  picture: {
    type: STRING,
    allowNull: false,
    comment: '商品图片'
  },
  price: {
    type: FLOAT,
    allowNull: false,
    comment: '商品价格'
  },
  stock: {
    type: INTEGER,
    allowNull: false,
    comment: '库存量'
  },
  introduce: {
    type: STRING,
    allowNull: false,
    comment: '商品介绍'
  }

})

module.exports = Good