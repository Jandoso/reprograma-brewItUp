const Distribuidores = require('../models/distribuidor');

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

exports.delete = async (req, res) => {
    const id = req.params.idDistribuidor;

    await Distribuidores.findOne({ _id: id }, (err, distribuidor) => {
        if (err) {
            return res.status(500).send(err)
        }
        
        distribuidor.remove(err => {
            if(!err) res.status(200).json({
              message: "Distribuidor deletado"
           })
        })
    })
    
};

