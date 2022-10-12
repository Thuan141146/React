'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Markdown', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            contentHTML: {
                allowNull: false,
                type: sequelize.TEXT('long'),
            },
            contentMarkdown: {
                allowNull: false,
                type: sequelize.TEXT('long'),
            },
            sukienid: {
                allowNull: true,
                type: sequelize.INTEGER,
            },
            anh: {
                allowNull: false,
                type: Sequelize.BLOB('long'),
            },
            mota: {
                allowNull: true,
                type: Sequelize.TEXT('long'),
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
        await queryInterface.dropTable('Markdown');
    }
};