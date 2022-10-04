'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tai_khoan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(250)
      },
      ten_tk: {
        type: Sequelize.STRING(30)
      },
      matkhau: {
        type: Sequelize.STRING(250)
      },
      diachi: {
        type: Sequelize.STRING(250)
      },
      gioitinh: {
        type: Sequelize.STRING(10)
      },
      sdt: {
        type: Sequelize.STRING(250)
      },
      anh: {
        type: Sequelize.STRING(250)
      },
      khu: {
        type: Sequelize.STRING(250)
      },
      roleid: {
        type: Sequelize.STRING(5)
      },
      keyRole: {
        type: Sequelize.STRING(5)
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tai_khoan');
  }
};