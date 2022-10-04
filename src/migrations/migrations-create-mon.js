'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('mon', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER

            },
            ID_DM: {
                type: Sequelize.INTEGER
            },
            TEN_MON: {
                type: Sequelize.STRING(250)
            },
            GIA: {
                type: Sequelize.DECIMAL
            },
            ANH: {
                type: Sequelize.BLOB('long'),
            },
            MO_TA: {
                type: Sequelize.STRING(250)
            },

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('mon');
    }
};
