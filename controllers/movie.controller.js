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
    /** 
    //* req.body

    {
        "title" : "Rois du Japon",
        "duration" : 84,
        "resume": "Lorem ipsum tralala",
        "Director": {
            "name" : "Yoki Yakashama"
        },  
        "Producer": {
            "name" : "Kim Hoji"
        },    
        "Category": {
            "name" : "Enfant"
        },
        "AgeClass": {
            "age_minimum": 3
        },
        "Actors": [
            {
                "name": "Shu Oki",
                "age": 31
            },
            {
                "name": "Abe Kijujima",
                "age": 29
            }
        ]
    }

    */

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
        res.status(400).send("All Movie's parameters must be send.");
    }

    req.body.Actors.forEach((element) => {
        if (element.name == null || element.age == null) {
            res.status(400).send("All Actor's parameters must be send.");
        }
    });

    const newMovie = req.body;

    Movie.create(newMovie)
        .then(async (data) => {
            
            //create Actors
            await req.body.Actors.forEach(async (element) => {
                await ActorController.createActorFromMovie(element.name, element.age, data.id)
                console.log(element)
            });
            //create Director
            await DirectorController.createDirectorFromMovie(
                req.body.Director.name,
                data.id
            );
            //create Producer
            await ProducerController.createProducerFromMovie(
                req.body.Producer.name,
                data.id
            );
            //create Category
            await CategoryController.createCategoryFromMovie(
                req.body.Category.name,
                data.id
            );
            //create AgeClass
            await AgeClassController.createAgeClassFromMovie(
                req.body.AgeClass.age_minimum,
                data.id
            );

            return data;
        })
        .then( (data) => {
            console.log(data.id);
            Movie.findByPk(data.id, {
                include: [Director, Producer, AgeClass, Category, Actor],
            })
            .then((result) => {
                    res.status(201).send(result);
                })
                .catch((error) => {
                    res.status(500).send(error);
                })
        }
        )
        .catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
};
