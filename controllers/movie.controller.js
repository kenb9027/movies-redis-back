const Movie = require("../models").Movie;


exports.findAllMovies = (req, res) => { 
    Movie.findAll()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            console.log(error)
        })
}