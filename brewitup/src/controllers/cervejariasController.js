const Cervejarias = require('../models/cervejaria');
const Joi = require('joi');

exports.get = (req, res) => {
    Cervejarias.find(function (err, cervejarias) {
        if (err) res.status(500).send(err);
        res.status(200).send(cervejarias);
    });
};

exports.post = (req, res) => {
    const cervejaria = new Cervejarias(req.body);

    cervejaria.save(function(err) {
        if(err) res.status(500).send(err);
        res.status(201).send(cervejaria);
    });
};

exports.delete = async (req, res) => {
    const id = req.params.idCervejaria;

    await Cervejarias.findOne({ _id: id }, (err, cervejaria) => {
        if (err) {
            return res.status(500).send(err)
        }
        
        cervejaria.remove(err => {
            if(!err) res.status(200).json({
              message: "Cervejaria deletada"
           })
        })
    })
    
};

exports.put = (req, res) => {
    const id = req.params.idCervejaria;
    
    if(!validateForm(req.body)) return res.status(400).json({
        message: "Campos inválidos"
    });

    Cervejarias.updateOne(
        { _id: id },
        { $set: req.body },
        { upsert: true },
        err => {
            if(err) return res.status(500).json({ err });
            res.status(200).json({
                message: "Cadastro atualizado com sucesso!"
            });
        });
};

const validateForm = fields => {
    const schema = {
        nomeFantasia: Joi.string(),
        razaoSocial: Joi.string(),
        telefone: Joi.number(),
        cnpj: Joi.number(),
        endereco: Joi.array().items(
            Joi.object().keys({
            nomeRua: Joi.string(),
            numero: Joi.number(),
            bairro: Joi.string(),
            cidade: Joi.string(),
            estado: Joi.string(),
            cep: Joi.number()
        }).min(1)
    )
    };
    const validation = Joi.validate(fields, schema);
    if(validation.error){
        return false;
    }
    return true;
};