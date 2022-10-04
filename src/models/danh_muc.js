'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class danh_muc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    danh_muc.init({
        TEN_DM: DataTypes.STRING,
        ANH: DataTypes.BLOB,

    }, {
        sequelize,
        modelName: 'danh_muc',
    });
    return danh_muc;
};