const Director = require("../models").Director;
exports.findAllDirector = (req, res) => {
    Director.findAll()
    .then(data => {
        res.status(200)
        .send(data);
    })
    .catch(err => {
        res.status(500)
        .send(err);
    })
}



exports.createDirectorFromMovie = (res , name , moivieId) => {
    const newDirector = {
        "name": name,
        "MovieId": moivieId
    };
    
    Director.create(newDirector)
        .then((data) => {
            // res.status(201).send(data);
        }).catch((err) => {
            // res.status(500).send(err)
        });
}