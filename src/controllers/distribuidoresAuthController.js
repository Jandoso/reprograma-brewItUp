const DistribuidoresUsuarios = require('../models/distribuidorUsuario');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

// Rotas para renderização de front end 

exports.getRegistro = (req, res) => {
    res.render("distribuidoresRegistro")
}

exports.getLogin = (req, res) => {
    res.render("distribuidoresLogin");
}


// Rotas de requisição

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
        return res.status(400).json({
            erro: "email já cadastrado"
        })
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    await DistribuidoresUsuarios.findOne({email}, (err, distribuidorUsuario) => {
        if(err || !distribuidorUsuario) {
            return res.status(400).json({
                erro: "Houve um erro durante o processo de login - verifique o email informado"
            });
        }

        if(!distribuidorUsuario.authenticate(password)) {
            return res.status(400).json({
                error: "Senha incorreta"
            })
        }

        const token = jwt.sign({ _id: distribuidorUsuario._id, role: distribuidorUsuario.role }, authConfig.secret)
        res.cookie('t', token, {expire: authConfig.expiresIn})
        const {_id, email, role } = distribuidorUsuario;
        return res.json({token, distribuidorUsuario: _id, email, role })
    });
};

exports.logout = (req, res) => {
    try{ 
        res.clearCookie('t')
        res.status(200).json({message: "Deslogado com Sucesso!"});
    } catch {
        res.json({
            erro: "Ocoreu um erro durante o processo de logout"
        })
    }
};