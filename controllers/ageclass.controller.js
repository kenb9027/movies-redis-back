const AgeClass = require("../models").AgeClass;

exports.findAllAgeClasss = (req, res) => {
    AgeClass.findAll()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.findOneAgeClass = (req, res) => {
    const id = req.params.id;

    if (id == null) {
        res.status(400).send("ID can't be empty");
    }

    AgeClass.findByPk(id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.createAgeClass = (req, res) => {
    const newAgeClass = req.body;
    
    AgeClass.create(newAgeClass)
        .then((data) => {
            res.status(201).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        });


}

exports.createAgeClassFromMovie = async (age_minimum , moivieId) => {
    const newAgeClass = {
        "age_minimum": age_minimum,
        "MovieId": moivieId
    };
    
    AgeClass.create(newAgeClass)
        
}
