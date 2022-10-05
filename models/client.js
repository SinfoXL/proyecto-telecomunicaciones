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
      //Client.hasMany(models.Request , { foreignKey : 'id_request' });
      //Client.hasMany(models.Service , { foreignKey : 'id_service' });
    }
  }
  Client.init({

    id_client : {
      type : DataTypes.INTEGER,
      allowNull : false,
      unique : true,
      primaryKey : true,
      autoIncrement : true
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