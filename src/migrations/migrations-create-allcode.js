'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('allcode', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            idkey: {
                type: Sequelize.STRING(30)
            },
            type: {
                type: Sequelize.STRING(50)
            },
            value: {
                type: Sequelize.STRING(250)
            },
            createAt: {
                allowNull: false,
                type: sequelize.DATE
            },
            updateAt: {
                allowNull: false,
                type: sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('allcode');
    }
};