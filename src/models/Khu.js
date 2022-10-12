'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class khu_vuc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            khu_vuc.hasMany(models.ban, { foreignKey: 'ID_KV' })
        }
    };
    khu_vuc.init({
        TEN_KV: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'khu_vuc',
    });
    return khu_vuc;
};