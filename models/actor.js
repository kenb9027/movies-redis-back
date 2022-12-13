'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Actor.belongsTo(models.Movie)

    }
  }
  Actor.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    MovieId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {         // Actor belongsTo Movie 1:1
        model: 'Movies',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};