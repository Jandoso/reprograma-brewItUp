const CervejariasUsuarios = require('../models/cervejariaUsuario');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

exports.getRegistro = (req, res) => {
    res.render('cervejariasRegistro')
}
 
exports.getLogin = (req, res) => {
    res.render('cervejariasLogin')
}

exports.registro =  async (req, res) => {
    const validarEmail = await CervejariasUsuarios.findOne({ email: req.body.email });
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
        return res.json({
            message: "email já cadastrado"
        })
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    await CervejariasUsuarios.findOne({email}, (err, cervejariaUsuario) => {
        if(err || !cervejariaUsuario) {
            return res.status(400).json({
                err: "Não existe um usuário cadastrado com o email informado"
            });
        }

        if(!cervejariaUsuario.authenticate(password)){
            return res.status(401).json({
                error: "Senha incorreta"
            })
        }

        const token = jwt.sign({ id: cervejariaUsuario.id},authConfig.secret)
        res.cookie('t', token, {expire: authConfig.expiresIn})
        const { id, email} = cervejariaUsuario
        return res.json({token, cervejariaUsuario: { id, email }})
    });
};

exports.logout = (req, res) => {
    res.clearCookie('t')
    res.json({message: "Deslogado com Sucesso!"});
};

exports.eCervejaria = async (req, res, next) => {
    const usuario = await CervejariasUsuarios.find({ id: req.user });
    if(!usuario) return res.status(401).json({ erro: "Acesso restrito a cervejarias" })

    return next();
}