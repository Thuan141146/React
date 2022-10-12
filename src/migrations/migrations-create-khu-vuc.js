'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('khu_vuc', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TEN_KV: {
                type: Sequelize.STRING(250)
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('khu_vuc');
    }
};