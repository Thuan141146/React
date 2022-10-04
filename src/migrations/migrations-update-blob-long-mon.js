module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('mon', 'ANH', {
                type: Sequelize.BLOB('long'),
                allowNull: true,
            },)
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('mon', 'ANH', {
                type: Sequelize.STRING,
                allowNull: true,
            },)
        ])
    }
};