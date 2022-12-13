const Movie = require("../models").Movie;
const Director = require("../models").Director;
const Producer = require("../models").Producer;
const AgeClass = require("../models").AgeClass;
const Category = require("../models").Category;
const Actor = require("../models").Actor;

const DirectorController = require("../controllers/director.controller");
const ProducerController = require("../controllers/producer.controller");
const AgeClassController = require("../controllers/ageclass.controller");
const CategoryController = require("../controllers/category.controller");
const ActorController = require("../controllers/actor.controller");

exports.findAllMovies = (req, res) => {
    Movie.findAll({
        include: [Director, Producer, AgeClass, Category, Actor],
    })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.findOneMovie = (req, res) => {
    const id = req.params.id;

    if (id == null) {
        res.status(400).send("ID can't be empty");
    }

    Movie.findByPk(id, {
        include: [Director, Producer, AgeClass, Category, Actor],
    })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.createMovie = (req, res) => {
    //* req.body
    // {
    //     "title" : "La marche des pingouins",
    //     "duration" : 144,
    //     "resume": "Lorem ipsum tralala",
    //     "Director": {
    //         "name" : "Jean Vasseur"
    //     },
    //     "Producer": {
    //         "name" : "Daniel Lemarchand"
    //     },
    //     "Category": {
    //         "name" : "Comédie"
    //     },
    //     "AgeClass": {
    //         "age_minimum": 6
    //     },
    //     "Actors": [
    //          {
    //              "name": "Rebecca Stone",
    //              "age": 31
    //          },
    //          {
    //              "name": "John Doe",
    //              "age": 20
    //          },
    //      ]
    // }

    if (
        req.body.title == null ||
        req.body.duration == null ||
        req.body.resume == null ||
        req.body.Director == null ||
        req.body.Producer == null ||
        req.body.Category == null ||
        req.body.AgeClass == null ||
        req.body.Actors == null ||
        req.body.Director.name == null ||
        req.body.Producer.name == null ||
        req.body.Category.name == null ||
        req.body.AgeClass.age_minimum == null
    ) {
        res.status(400).send("All Movie parameters must be send.");
    }

    req.body.Actors.forEach((element) => {
        if (element.name == null || element.age == null) {
            res.status(400).send("All Actor parameters must be send.");
        }
    });

    const newMovie = req.body;

    Movie.create(newMovie)
        .then((data) => {

            DirectorController.createDirectorFromMovie(
                req.body.Director.name,
                data.id
            );
            ProducerController.createProducerFromMovie(
                req.body.Producer.name,
                data.id
            );
            CategoryController.createCategoryFromMovie(
                req.body.Category.name,
                data.id
            );
            AgeClassController.createAgeClassFromMovie(
                req.body.AgeClass.age_minimum,
                data.id
            );

            req.body.Actors.forEach((element) => {
                ActorController.createActorFromMovie(element.name , element.age , data.id)
            });

            Movie.findByPk(data.id, {
                include: [Director, Producer, AgeClass, Category, Actor],
            })
                .then((result) => {
                    res.status(201).send(result);
                })
                .catch((error) => {
                    res.status(500).send(error);
                });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
};
