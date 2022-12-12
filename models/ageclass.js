'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgeClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgeClass.init({
    age_minimum: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AgeClass',
  });
  return AgeClass;
};