"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Movie.hasOne(models.Director, {
                foreignKey: "director_id",
            });
            Movie.hasOne(models.Producer, {
                foreignKey: "producer_id",
            });
            Movie.hasOne(models.Category, {
                foreignKey: "category_id",
            });
            Movie.hasOne(models.AgeClass, {
                foreignKey: "ageclass_id",
            });
            Movie.hasMany(models.Actor, {
              foreignKey: 'movie_id'
            });
        }
    }
    Movie.init(
        {
            title: DataTypes.STRING,
            duration: DataTypes.INTEGER,
            resume: DataTypes.STRING,
            director_id: DataTypes.INTEGER,
            producer_id: DataTypes.INTEGER,
            category_id: DataTypes.INTEGER,
            ageclass_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Movie",
        }
    );
    return Movie;
};
