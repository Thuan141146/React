module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('danh_muc', 'ANH', {
                type: Sequelize.BLOB('long'),
                allowNull: true,
            },)
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('danh_muc', 'ANH', {
                type: Sequelize.STRING,
                allowNull: true,
            },)
        ])
    }
};