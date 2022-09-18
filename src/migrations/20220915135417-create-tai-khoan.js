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
      ten_tk: {
        type: Sequelize.STRING(30)
      },
      matkhau: {
        type: Sequelize.STRING(250)
      },
      roleid: {
        type: Sequelize.STRING(2)
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tai_khoan');
  }
};