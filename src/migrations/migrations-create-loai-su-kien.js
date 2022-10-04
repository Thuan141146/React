'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('loai_sk', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            TEN_LSK: {
                type: Sequelize.STRING(250)
            },
            ANH: {
                type: Sequelize.BLOB('long')
            },
            MO_TA: {
                type: Sequelize.STRING(250)
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('loai_sk');
    }
};