'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('size', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER

            },
            TEN_SIZE: {
                type: Sequelize.STRING(250)
            },

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('size');
    }
};
