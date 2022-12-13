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



exports.findOneDirector = (req, res) => {
    const id = req.body.id;

    if (id == null) {
        res.status(400).send("ID can't be empty");
    }

    Director.findByPk(id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};


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
    
    Director.update(
        updateDirector,
        { where: { id: req.body.id } }
    ) 
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send(err);
    }) 

}

exports.createDirectorFromMovie = async (name , moivieId) => {
    const newDirector = {
        "name": name,
        "MovieId": moivieId
    };
    
    await Director.create(newDirector)

}