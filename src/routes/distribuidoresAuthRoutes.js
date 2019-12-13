const distribuidorAuthController = require('../controllers/distribuidoresAuthController')
const express = require('express');
const router = express.Router();

// Rotas para renderização de front end 

router.get('/login', distribuidorAuthController.getLogin);
router.get('/registro', distribuidorAuthController.getRegistro)

//Rotas de requisição


/**
 * @api {post} /api/distribuidores/registro Rota para registro de login e senha de distribuidores
 * @apiGroup Distribuidores
 * 
 * @apiParam (Request Body) {String} email Endereço de email do distribuidor
 * @apiParam (Request Body) {String} password Senha para login do distribuidor
 *
 * @apiSuccess {Object} distribuidor Informações sobre o novo registro de login do distribuidor
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 201 CREATED
 *  {
    "distribuidorUsuario": {
        "_id": "5df3b77db64d401cb4a1ee39",
        "email": "vendas123@logbrew.com.br",
        "createdAt": "2019-12-13T16:08:29.964Z",
        "updatedAt": "2019-12-13T16:08:29.964Z",
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
 
router.post('/registro', distribuidorAuthController.registro);


/**
 * @api {post} /api/distribuidores/login Rota para login (geração de token de acesso) de distribuidores
 * @apiGroup Distribuidores
 * 
 * 
 * @apiParam (Request Body) {String} email Endereço de email do distribuidor
 * @apiParam (Request Body) {String} password Senha para login do distribuidor
 *
 * @apiSuccess {Object} distribuidor Informações sobre o novo registro de login do distribuidor
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVmZDQ0NmY5YWM5ZDEzY2M3NTAwOGMiLCJpYXQiOjE1NzYyNTM0NDJ9.sdXLFKTqMsWQTeZ_79ga8VVfOhqk7NJ20py1Mq0Kb2s",
    "distribuidorUsuario": "5defd446f9ac9d13cc75008c",
    "email": "vendas1@logbrew.com.br"
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

router.post('/login', distribuidorAuthController.login);


/**
 * @api {get} /api/distribuidores/logout Rota para logout (limpeza dos Cookies de token de acesso) de distribuidores
 * @apiGroup Distribuidores
 * 
 * @apiSuccess {Object} distribuidor Limpeza de cookies do token de acesso de distribuidor
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

router.get('/logout', distribuidorAuthController.logout);
module.exports = router;
