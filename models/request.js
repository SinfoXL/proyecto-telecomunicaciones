'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Request.belongsTo(models.Client, { foreignKey : 'id_client' });
    }
  }
  Request.init({

    id_request : {
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey : true,
      autoIncrement : true
    },

    state : {
      type : DataTypes.STRING,
      allowNull : false,
    },

    description : {
      type : DataTypes.STRING,
      allowNull : false
    },

    platform : {
      type : DataTypes.STRING,
      allowNull : false
    }

  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};