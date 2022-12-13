const Actor = require("../models").Actor;

exports.findAllActors = (req, res) => {
    Actor.findAll()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.findOneActor = (req, res) => {
    const id = req.params.id;

    if (id == null) {
        res.status(400).send("ID can't be empty");
    }

    Actor.findByPk(id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.createActor = (req, res) => {
    const newActor = req.body;
    
    Actor.create(newActor)
        .then((data) => {
            res.status(201).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        });


}
