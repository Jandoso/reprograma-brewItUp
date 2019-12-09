const Cervejarias = require('../models/cervejarias');

//Rotas Get

exports.get = (req, res) => {
    Cervejarias.find(function (err, cervejarias) {
        if (err) res.status(500).send(err);
        res.status(200).send(cervejarias);
    });
};

// Rotas Post

exports.post = (req, res) => {
    const cervejaria = new Cervejarias(req.body);

    cervejaria.save(function(err) {
        if(err) res.status(500).send(err);
        res.status(201).send(cervejaria);
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
};