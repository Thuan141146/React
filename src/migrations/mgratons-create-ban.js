'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ban', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER

            },
            ID_KV: {
                allowNull: true,
                type: sequelize.INTEGER,
            },
            SO_BAN: {
                allowNull: true,
                type: sequelize.INTEGER,
            },
            TT: {
                type: Sequelize.STRING(250)
            },

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('ban');
    }
};
