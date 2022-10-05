'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({

    id : {
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey : true
    },

    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    adress : {
      type : DataTypes.STRING,
    }

  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};