const Distribuidores = require('../models/distribuidores');

exports.get = (req, res) => {
    Distribuidores.find(function (err, distribuidores) {
        if (err) res.status(500).send(err);
        res.status(200).send(distribuidores);
    });
};

exports.post = (req, res) => {
    const distribuidor = new Distribuidores(req.body);

    distribuidor.save(function(err) {
        if(err) res.status(500).send(err);
        res.status(201).send(distribuidor);
    });
};