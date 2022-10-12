'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class loai_sk extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            loai_sk.hasOne(models.Markdown, { foreignKey: 'sukienid' })
            // define association here
        }
    };
    loai_sk.init({
        TEN_LSK: DataTypes.STRING,
        ANH: DataTypes.BLOB,
        MO_TA: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'loai_sk',
    });
    return loai_sk;
};