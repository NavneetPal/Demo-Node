'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    isActive:DataTypes.ENUM('1','0'),
    city:DataTypes.STRING,
    state:DataTypes.STRING,
    address:DataTypes.STRING,
    phoneno:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    paranoid:true,
  });
  return User;
};