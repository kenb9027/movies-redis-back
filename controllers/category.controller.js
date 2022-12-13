const Category = require("../models").Category;

exports.findAllCategorys = (req, res) => {
    Category.findAll()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.findOneCategory = (req, res) => {
    const id = req.params.id;

    if (id == null) {
        res.status(400).send("ID can't be empty");
    }

    Category.findByPk(id)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.createCategory = (req, res) => {
    const newCategory = req.body;
    
    Category.create(newCategory)
        .then((data) => {
            res.status(201).send(data);
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.createCategoryFromMovie = async (name , moivieId) => {
    const newCategory = {
        "name": name,
        "MovieId": moivieId
    };
    
    await Category.create(newCategory)

}
