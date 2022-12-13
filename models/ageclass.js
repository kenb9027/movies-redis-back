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
      AgeClass.belongsTo(models.Movie)

    }
  }
  AgeClass.init({
    age_minimum: DataTypes.INTEGER,
    MovieId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {         // Director belongsTo Movie 1:1
        model: 'Movies',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'AgeClass',
  });
  return AgeClass;
};