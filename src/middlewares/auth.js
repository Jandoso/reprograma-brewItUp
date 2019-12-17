const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

exports.isAuthenticated = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({ error: 'Token não informado'});
    }
    const parts = authHeader.split(' ');

    if(!parts.lenght === 2)
    return res.status(401).send({ error: 'Erro de token'})

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: 'Token malformado' })

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token inválido'})

        req.userId = decoded.id;

        return next();
    });
};

exports.eCervejaria = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const parts = authHeader.split(' ');
    const [ , token ] = parts;
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token inválido'})

        if (decoded.role != 0) return res.status(403).json({ erro: "Este é um recurso exclusivo para cervejarias"})

        return next();
    });
};

exports.eDistribuidor = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const parts = authHeader.split(' ');
    const [ , token ] = parts;
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token inválido'})

        if (decoded.role != 1) return res.status(403).json({ erro: "Este é um recurso exclusivo para distribuidores"})

        return next();
    });
};