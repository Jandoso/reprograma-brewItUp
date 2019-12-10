const DistribuidoresUsuarios = require('../models/distribuidorUsuario');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

exports.registro = async (req, res) => {
    const validarEmail = await DistribuidoresUsuarios.findOneAndDelete({ email: req.body.email });
    if(!validarEmail) {
        const distribuidorUsuario = new DistribuidoresUsuarios(req.body);
        distribuidorUsuario.save((err, distribuidorUsuario) => {
            if(err) {
                return res.status(400).json({
                    erro: "erro ao salvar o usuário"
                });
            }
            distribuidorUsuario.salt = undefined;
            distribuidorUsuario.hashed_password = undefined;
            res.status(201).json({
                distribuidorUsuario
            });
        });
    } else {
        return res.json({
            message: "email já cadastrado"
        })
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    await DistribuidoresUsuarios.findOne({email}, (err, distribuidorUsuario) => {
        if(err || !distribuidorUsuario) {
            return res.status(400).json({
                err: "Não existe um usuário cadastrado com o email informado"
            });
        }

        if(!distribuidorUsuario.authenticate(password)) {
            return res.status(401).json({
                error: "Senha incorreta"
            })
        }
        
        const token = jwt.sign({_id: distribuidorUsuario._id}, authConfig.secret)
        res.cookie('t', token, {expire: authConfig.expiresIn})
        const {_id, email} = distribuidorUsuario;
        return res.json({token, distribuidorUsuario: _id, email})
    });
};