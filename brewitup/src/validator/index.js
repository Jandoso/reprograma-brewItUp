exports.validacaoCadastroUsuario = (req, res, next) => {
    req.check('email', 'O campo Email é obrigatório').notEmpty()
    req.check('email', 'Email deve conter no máximo 32 caracteres')
        .matches(/.+\@.+\..+/)
        .withMessage('Email deve conter @')
        .isLength({max: 100});
        req.check('senha', 'O campo Senha é obrigatório').notEmpty()
        req.check('senha')
        .isLength({
            min: 4,
            max: 8
        })
        .withMessage('A senha deve conter entre 4 e 8 caracteres')
        .matches(/\d/)
        .withMessage('A senha deve conter ao menos um número')
        const errors = req.validationErrors()
        if(errors){
            const firstError = errors.map(error => error.msg)[0];
            return res.status(400).json({ error: firstError });
        }
        next();
};