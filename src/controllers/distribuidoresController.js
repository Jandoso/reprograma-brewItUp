const Distribuidores = require('../models/distribuidor');
const Joi = require('joi');

exports.get = async (req, res) => {
    await Distribuidores.find(function (err, distribuidores) {
        if (err) res.status(500).json({
            erro: "Houve um erro ao retornar a lista de cervejarias"
        })
        res.status(200).json({ distribuidores });
    });
};

exports.post = async (req, res) => {
    const distribuidor = new Distribuidores(req.body);

    await distribuidor.save(function(err) {
        if(err) status(400).json({
            erro: "Houve um erro ao criar novo distribuidor, favor verifique os campos informados"
        });
        res.status(201).json({ distribuidor });
    });
};

exports.delete = async (req, res) => {
    const id = req.params.idDistribuidor;

    await Distribuidores.findOne({ _id: id }, (err, distribuidor) => {
        if (err) {
            return res.status(400).json({
                erro: "Não foi possível efeturar a exclusão do cadastro do distribuidor"
            })
        }
        
        distribuidor.remove(err => {
            if(!err) res.status(200).json({
              message: "Distribuidor deletado"
           })
        })
    })
    
};



exports.put = async (req, res) => {
    const id = req.params.idDistribuidor;
    
    if(!validateForm(req.body)) return res.status(400).json({
        message: "Campos inválidos"
    });

    await Distribuidores.updateOne(
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
        })
        ),
        camaraFria: Joi.boolean(),
        caminhaoRefrigerado: Joi.boolean(),
        equipeComercial: Joi.boolean(),
        sommelier: Joi.boolean()
    };
    const validation = Joi.validate(fields, schema);
    if(validation.error){
        return false;
    }
    return true;
};

