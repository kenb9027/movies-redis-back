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

    Movie.findByPk(id , {
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
    //     }
    // }
    
    if (
        req.body.title == null ||
        req.body.duration == null ||
        req.body.resume == null ||
        req.body.Director == null ||
        req.body.Producer == null ||
        req.body.Category == null ||
        req.body.AgeClass == null ||
        req.body.Director.name == null ||
        req.body.Producer.name == null ||
        req.body.Category.name == null ||
        req.body.AgeClass.age_minimum == null
    ) { 
        res.status(400).send("All Movie parameters must be send.")
    }

    const newMovie = req.body;
    
    Movie.create(newMovie)
        .then((data) => {

            DirectorController.createDirectorFromMovie(res , req.body.Director.name, data.id);
            ProducerController.createProducerFromMovie(res , req.body.Producer.name, data.id);
            CategoryController.createCategoryFromMovie(res , req.body.Category.name, data.id);
            AgeClassController.createAgeClassFromMovie(res , req.body.AgeClass.age_minimum, data.id);

            movieCreated = Movie.findByPk(data.id , {
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
            res.status(500).send(err)
        });


}
