'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tai_khoan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tai_khoan.init({
    ten_tk: DataTypes.STRING,
    matkhau: DataTypes.STRING,
    roleid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tai_khoan',
  });
  return tai_khoan;
};