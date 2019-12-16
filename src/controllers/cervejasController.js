const Cervejas = require('../models/cerveja');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Joi = require('joi');


exports.getCervejasCervejaria = async (req, res) => {
    const idCervejaria = req.params.cervejariaId;

    const cervejas = await Cervejas.find({ cervejaria: idCervejaria })

    if(!cervejas) {
        res.status(404).json({
            erro : "Não localizamos nenhuma cervejaria com o ID informado"
        })
    }

    res.status(200).json({ cervejas });
};

exports.postCervejas =  (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                erro: "Não foi possível fazer upload da imagem"
            });
        }

        const { nome, estilo, escola, teorAlcoolico, embalagem, volume, quantidade, preco, cervejaria, descricao, pasteurizada } = fields;

        let cerveja = new Cervejas(fields);

        if(files.foto) {
            if(files.foto.size > 1000000){
                return res.status(400).json({
                    erro: "A imagem não deve ter mais que 1mb"
                });
            } 
            cerveja.foto.data = fs.readFileSync(files.foto.path);
            cerveja.foto.contentType = files.foto.type;
        }

        cerveja.save((err, cerveja) => {
            if(err) {
                return res.status(400).json({
                    erro: err
                });
            }
            res.status(201).json({cerveja});
        });
    });  
};


exports.alterarCerveja = async (req, res) => {
    if(!validateForm(req.body)) return res.status(400).json({
        erro: "Campos inválidos"
    });

    const cervejaId = req.params.cervejaId;

    await Cervejas.findOne({ _id: cervejaId }, (err, cerveja) => {
        if(err) res.status(500).json({
            erro: "Houve um erro ao localizar a cerveja, por favor tente novamente"
        });

        if(!cerveja) return res.status(400).json({
            erro: `Cerveja com o código ${cervejaId} não foi localizada`
        });

        Cervejas.updateOne(
            { _id: req.params.cervejaId },
            { $set: req.body },
            { upsert: true },
            err => {
                if(err) return res.status(500).json({ err });
                res.status(200).json({ 
                    mensagem: "Produto atualizado com sucesso!"
                });
            });
    });
};

const validateForm = (fields) => {
    const schema = {
        nome: Joi.string(),
        estilo: Joi.string(),
        escola: Joi.string(),
        teorAlcoolico: Joi.number(),
        embalagem: Joi.string(),
        volume: Joi.number(),
        quantidade: Joi.number(),
        preco: Joi.number(),
        descricao: Joi.string(),
        pasteurizada: Joi.boolean()
    };
    const validation = Joi.validate(fields, schema);
    if(validation.error) {
        return false;
    }
    return true;
};

exports.excluirCerveja = async (req, res) => {
    const cervejaId = req.params.cervejaId;

    await Cervejas.findOne({ _id: cervejaId }, (err, cerveja) => {
        if(err) res.status(500).send(err);

        if(!cerveja) return res.status(400).json({
            erro: `Cerveja com o código ${cervejaId} não foi localizada`
        })

        cerveja.remove( err => {
            if(!err) res.status(200).json({
                mensagem: `Cerveja com o código ${cervejaId} foi deletada com sucesso`
            })
        });
    });
};