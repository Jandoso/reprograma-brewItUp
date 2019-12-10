const Cervejas = require('../models/cerveja');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

exports.postCervejas = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: 'Não foi possível fazer upload da imagem'
            });
        }

        const { nome, estilo, escola, teorAlcoolico, embalagem, volume, quantidade, preco, cervejaria, descricao, pasteurizada } = fields;

        let cerveja = new Cervejas(fields);

        if(files.foto) {
            if(files.foto.size > 1000000){
                return res.status(400).json({
                    error: 'A imagem não deve ter mais que 1mb'
                });
            } 
            cerveja.foto.data = fs.readFileSync(files.foto.path);
            cerveja.foto.contentType = files.foto.type;
        }

        cerveja.save((err, resultado) => {
            if(err) {
                console.log('erro ao criar o produto', err)
                return res.status(400).json({
                    error: err
                });
            }
            res.json(resultado);
        });
    });
};

exports.getCervejasCervejaria = async (req, res) => {
    const idCervejaria = req.params.cervejariaId;

    const cervejas = await Cervejas.find({ cervejaria: idCervejaria })

    if(!cervejas) {
        res.json({
            message: "Não consta nenhuma cerveja cadastrada para esta cervejaria"
        })
    }

    res.status(200).send(cervejas);
}
