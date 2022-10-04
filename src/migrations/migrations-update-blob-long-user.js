module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('tai_khoan', 'anh', {
                type: Sequelize.BLOB('long'),
                allowNull: true,
            },)
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('tai_khoan', 'anh', {
                type: Sequelize.STRING,
                allowNull: true,
            },)
        ])
    }
};