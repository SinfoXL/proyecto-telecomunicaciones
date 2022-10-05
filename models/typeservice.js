'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeService.init({

    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      allowNull : false
    },

    typeservice : {
      type : DataTypes.STRING,
      allowNull : false
    },


  }, {
    sequelize,
    modelName: 'TypeService',
  });
  return TypeService;
};