'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ban extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ban.belongsTo(models.khu_vuc, { foreignKey: 'ID_KV' })
        }
    };
    ban.init({
        ID_KV: DataTypes.INTEGER,
        SO_BAN: DataTypes.INTEGER,
        TT: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'ban',
    });
    return ban;
};