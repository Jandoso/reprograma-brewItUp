const cervejariaAuthController = require('../controllers/cervejariasAuthController')
const express = require('express');
const router = express.Router();

// Rotas para renderização de front end
router.get('/login', cervejariaAuthController.getLogin);
router.get('/registro', cervejariaAuthController.getRegistro)

// Rotas de Requisição


/**
 * @api {post} /api/cervejarias/registro Rota para registro de login e senha de cervejarias
 * @apiGroup Cervejarias
 * 
 * @apiParam (Request Body) {String} email Endereço de email da cervejaria
 * @apiParam (Request Body) {String} password Senha para login da cervejaria
 *
 * @apiSuccess {Object} cervejaria Informações sobre o novo registro de login da cervejaria
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 201 CREATED
 *  {
    "cervejariaUsuario": {
        "_id": "5df3a54d21d60b1624f4b086",
        "email": "contatovendas@atuttabirra.com.br",
        "createdAt": "2019-12-13T14:50:53.916Z",
        "updatedAt": "2019-12-13T14:50:53.916Z",
        "__v": 0
        }
    }
 *
 * @apiError erro Erro ao salvar o usuário
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "erro ao salvar o usuário"
 *     }
 * 
 *  
 * @apiError erro Email já cadastrado
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "email já cadastrado"
 *     }
 */
 
router.post('/registro', cervejariaAuthController.registro);


/**
 * @api {post} /api/cervejarias/login Rota para login (geração de token de acesso) de cervejarias
 * @apiGroup Cervejarias
 * 
 * 
 * @apiParam (Request Body) {String} email Endereço de email da cervejaria
 * @apiParam (Request Body) {String} password Senha para login da cervejaria
 *
 * @apiSuccess {Object} cervejaria Informações sobre o novo registro de login da cervejaria
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE",
    "cervejariaUsuario": {
        "id": "5df2888f59d2a50af857e68d",
        "email": "contato123@atuttabirra.com.br"
        }
    }
 *
 * @apiError erro Erro ao realizar o login
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Houve um erro durante o processo de login - verifique o email informado"
 *     }
 * 
 *  
 * @apiError erro Senha incorreta
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Senha incorreta"
 *     }
 */
router.post('/login', cervejariaAuthController.login);


/**
 * @api {get} /api/cervejarias/logout Rota para logout (limpeza dos Cookies de token de acesso) de cervejarias
 * @apiGroup Cervejarias
 * 
 * @apiSuccess {Object} cervejaria Limpeza de cookies do token de acesso de cervejarias
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *  {
    "message": "Deslogado com Sucesso!"
    }
 *
 * @apiError erro Erro durante o processo de logout
 *
 * @apiErrorExample {json} Erro
 *  
 *     {
 *       "erro": "Ocoreu um erro durante o processo de logout"
 *     }
 * 
 */
router.get('/logout', cervejariaAuthController.logout);



module.exports = router;
