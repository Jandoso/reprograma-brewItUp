const Cervejarias = require('../models/cervejarias');

//Rotas Get

exports.get = (req, res) => {
    Cervejarias.find(function (err, cervejarias) {
        if (err) res.status(500).send(err);
        res.status(200).send(cervejarias);
    });
};

exports.getProductsByBreweryId = (req, res) => {
    const cervejariaId = req.params.id;

    Cervejarias.findById(cervejariaId, function (err, cervejaria) {
        if(err) return res.status(500).send(err);
        if(!cervejaria){
            return res.status(200).send({ message: "Infelizmente não pudemos localizar esta cervejaria"})
        }
        res.status(200).send(cervejaria.cervejas);
    })
}

// Rotas Post

exports.post = (req, res) => {
    const cervejaria = new Cervejarias(req.body);

    cervejaria.save(function(err) {
        if(err) res.status(500).send(err);
        res.status(201).send(cervejaria);
    });
};