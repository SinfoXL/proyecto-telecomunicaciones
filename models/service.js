'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Service.belongsTo(models.Client, { foreignKey : 'id_client' });
      //Service.hasMany(models.TypeService, { foreignKey : 'id_typeservice' });
    }
  }
  Service.init({
    id_service : {
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey : true,
      autoIncrement : true
    },

    name : {
     type : DataTypes.STRING ,
     allowNull : false, 

    }
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};