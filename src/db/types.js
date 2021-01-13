/**   
 * @description 封装sequelize 数据模型
 * @author syy
*/

const DataTypes = require('sequelize')

module.exports = {
  STRING: DataTypes.STRING,
  DECIMAL: DataTypes.DECIMAL,
  TEXT: DataTypes.TEXT,
  INTEGER: DataTypes.INTEGER,
  BOOLEAN: DataTypes.BOOLEAN,
  FLOAT: DataTypes.FLOAT
}