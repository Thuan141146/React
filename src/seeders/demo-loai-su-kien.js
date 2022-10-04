'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('loai_sk', [{
            TEN_LSK: 'GIAO LƯU ĐỌC GIẢ',
            ANH: '',
            MO_TA: 'Giao lưu hỏi đáp với đọc giả'

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
