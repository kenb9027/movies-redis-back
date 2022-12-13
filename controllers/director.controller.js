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


exports.createDirector = (req, res) => {
    Director.create(req.body)
    .then(data => {
        if(req.body.name != null){
            req.status(200)
            .send(data);
        }
    })
    .catch(err => {
        res.status(500)
        .send(err);
    })
}

exports.deleteDirector = (req, res) => {
    Director.destroy({
        where: {
            name: req.body.id
          }
    })
    .then(data => {
        console.log(req.body)
            req.status(200)
            .send(data);
    })
    .catch(err => {
        res.status(500)
        .send(err);
    }) 
}

exports.updateDirector = (req, res) => {
    const updateDirector = {
        name: req.body.name
    }
    Director.update( updateDirector , {where: {
        id: req.body.id
      }}) 
    .then(data => {
        console.log(data)
            req.status(200)
            .send(data);
    })
    .catch(err => {
        console.log("test1")
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