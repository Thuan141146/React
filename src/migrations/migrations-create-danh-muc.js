'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('danh_muc', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TEN_DM: {
                type: Sequelize.STRING(250)
            },
            ANH: {
                type: Sequelize.BLOB('long')
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('danh_muc');
    }
};