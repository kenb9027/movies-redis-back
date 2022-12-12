'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Movie.hasOne(models.Director);
      Movie.hasOne(models.Producer);
      Movie.hasOne(models.Category);
      Movie.hasOne(models.AgeClass);
      Movie.hasMany(models.Actor);

    }
  }
  Movie.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    resume: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};