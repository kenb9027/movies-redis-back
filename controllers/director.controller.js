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



exports.createDirectorFromMovie = async (name , moivieId) => {
    const newDirector = {
        "name": name,
        "MovieId": moivieId
    };
    
    await Director.create(newDirector)

}