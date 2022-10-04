'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tai_khoan', [{
      email: 'thuanb18099@Student.ctu.edu.vn',
      ten_tk: 'b1809299',
      matkhau: '12345678',
      diachi: 'cantho',
      gioitinh: 'nam',
      sdt: '0944141146',
      anh: '',
      khu: 'Khu A',
      roleid: 'ROLE',
      keyRole: 'R1',
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
