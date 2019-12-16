const CervejariasUsuarios = require('../models/cervejariaUsuario');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

// Rotas para renderização de front end 
exports.getRegistro = (req, res) => {
    res.render('cervejariasRegistro')
}
 
exports.getLogin = (req, res) => {
    res.render('cervejariasLogin')
}

// Rotas de Requisição 

exports.registro =  async (req, res) => {
    const { email } = req.body
    const validarEmail = await CervejariasUsuarios.findOne({ email });
    if (!validarEmail) {
        const cervejariaUsuario = new CervejariasUsuarios(req.body);
    cervejariaUsuario.save((err, cervejariaUsuario) => {
        if (err) {
            return res.status(400).json({
                erro: "erro ao salvar o usuário"
            });
        }
        cervejariaUsuario.salt = undefined;
        cervejariaUsuario.hashed_password = undefined;
        res.status(201).json({
            cervejariaUsuario
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
    await CervejariasUsuarios.findOne({email}, (err, cervejariaUsuario) => {
        if(err || !cervejariaUsuario) {
            return res.status(400).json({
                erro: "Houve um erro durante o processo de login - verifique o email informado"
            });
        }

        if(!cervejariaUsuario.authenticate(password)){
            return res.status(400).json({
                erro: "Senha incorreta"
            })
        }

        const token = jwt.sign({ id: cervejariaUsuario.id},authConfig.secret)
        res.cookie('t', token, {expire: authConfig.expiresIn})
        const { id, email} = cervejariaUsuario
        return res.status(200).json({token, cervejariaUsuario: { id, email }})
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

