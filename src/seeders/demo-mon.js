'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('mon', [{
            ID_DM: '003',
            TEN_MON: 'Trà vải',
            GIA: '35000',
            ANH: '',
            MO_TA: 'Vị trà thanh mát',

        }]);

    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
