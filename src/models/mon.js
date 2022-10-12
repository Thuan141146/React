'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mon extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            mon.belongsTo(models.danh_muc, { foreignKey: 'ID_DM' })
        }
    };
    mon.init({
        ID_DM: DataTypes.INTEGER,
        TEN_MON: DataTypes.STRING,
        SIZE: DataTypes.STRING,
        GIA: DataTypes.DECIMAL,
        ANH: DataTypes.BLOB,
        MO_TA: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'mon',
    });
    return mon;
};