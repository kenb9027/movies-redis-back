const Producer = require("../models").Producer;

exports.findAllProducers = (req, res) => {
    Producer.findAll()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.findOneProducer = (req, res) => {
    const id = req.params.id;

    if (id == null) {
        res.status(400).send("ID can't be empty");
    }

    Producer.findByPk(id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.createProducer = (req, res) => {
    const newProducer = req.body;
    
    Producer.create(newProducer)
        .then((data) => {
            res.status(201).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        });


}

exports.createProducerFromMovie = async (name , moivieId) => {
    const newProducer = {
        "name": name,
        "MovieId": moivieId
    };
    
    await Producer.create(newProducer)

}
