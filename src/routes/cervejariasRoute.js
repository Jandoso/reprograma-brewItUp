const express = require('express');
const router = express.Router();
const cervejariasController = require('../controllers/cervejariasController');
const { isAuthenticated, eCervejaria } = require('../middlewares/auth')

/**
 * @api {get} /api/cervejarias Requisição de lista completa de cervejarias cadastradas
 * @apiGroup Cervejarias
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 *
 *
 * @apiSuccess {Object} cervejarias Cadastro completo da cervejaria
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *      {
    "cervejarias": [
        {
            "_id": "5deed0308a02c44be455657a",
            "nomeFantasia": "A Tutta Birra - Birrificio Artiginale",
            "razaoSocial": "Eugenio Lorenzo Caputi Eireli",
            "telefone": 19981203354,
            "cnpj": 123456789000101,
            "endereco": [
                {
                    "_id": "5df2c3cdc0218f04c8849d68",
                    "numero": 817,
                    "bairro": "parque 1 de maio",
                    "cidade": "piracicaba",
                    "estado": "são paulo",
                    "cep": 13425130
                }
            ],
            "createdAt": "2019-12-09T22:52:32.954Z",
            "updatedAt": "2019-12-12T22:49:51.608Z",
            "__v": 0
        }
    ]
    }
 *
 * @apiError erro Erro ao retornar lista de cervejarias cadastradas
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "erro": "Houve um erro ao retornar a lista de cervejarias"
 *     }
 */

router.get('/', isAuthenticated, cervejariasController.get);

/**
 * @api {post} /api/cervejarias Requisição de cadastro completo de cervejarias
 * @apiGroup Cervejarias
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 *
 * @apiParam (Request Body) {String} nomeFantasia Nome Fantasia da cervejaria
 * @apiParam (Request Body) {String} razaoSocial Razão social da cervejaria
 * @apiParam (Request Body) {Number} telefone Número de telefone da cervejaria
 * @apiParam (Request Body) {Number} cnpj Número do CNPJ da cervejaria
 * @apiParam (Request Body) {Object[]} endereco Informações de endereço da cervejaria
 * @apiParam (Request Body) {String} endereco.nomeRua Nome da rua em que fica localizada a cervejaria
 * @apiParam (Request Body) {Number} endereco.numero Número do imóvel em que fica localizada a cervejaria
 * @apiParam (Request Body) {String} endereco.bairro Nome do bairro em que fica localizada a cervejaria
 * @apiParam (Request Body) {String} endereco.cidade Nome da cidade em que fica localizada a cervejaria
 * @apiParam (Request Body) {String} endereco.estado Estado em que fica localizada a cervejaria
 * @apiParam (Request Body) {Number} endereco.cep Número do CEP da rua em que fica localizada a cervejaria
 * @apiParam (Request Body) {ObjectId} dadosLogin ID dos dados de login e senha cadastrados pela rota /api/cervejarias/registro (cervejariausuario)
 *
 * @apiSuccess {Object} cervejaria Cadastro completo da cervejaria
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 201 CREATED
 *     {
    "cervejaria": {
        "_id": "5df3c1e94f68d02598570f0f",
        "nomeFantasia": "A Tutta Birra - Birrificio Artiginale",
        "razaoSocial": "Eugenio Lorenzo Caputi Eireli",
        "telefone": 19981203354,
        "cnpj": 123456789000101,
        "endereco": [
            {
                "_id": "5df3c1e94f68d02598570f10",
                "nomeRua": "Avenida Cassio Pascoal Padovani",
                "numero": 3197,
                "bairro": "Água Seca",
                "cidade": "Piracicaba",
                "estado": "São Paulo",
                "cep": 13425130
            }
        ],
        "dadosLogin": "5defbd9f70396e047c8e7686",
        "createdAt": "2019-12-13T16:52:57.447Z",
        "updatedAt": "2019-12-13T16:52:57.447Z",
        "__v": 0
    }
}
 *
 * @apiError erro Erro ao salvar os dados da cervejaria
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Houve um erro ao criar nova cervejaria, favor verifique os campos informados"
 *     }
 */
router.post('/', isAuthenticated, eCervejaria, cervejariasController.post);


/**
 * @api {delete} /api/cervejarias/:idCervejaria Requisição exclusão de cadastro da cervejaria
 * @apiGroup Cervejarias
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 *
 * @apiParam {Number} idCervejaria id da cervejaria a ser deletada - ID único
 * 
 * @apiSuccess {Object} cervejaria Mensagem de exclusão 
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *      {
              message: "Cervejaria deletada"
        }
 *
 * @apiError erro Erro ao excluir cervejaria
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Não foi possível efeturar a exclusão do cadastro da cervejaria"
 *     }
 */
router.delete('/:idCervejaria', isAuthenticated, eCervejaria, cervejariasController.delete);


/**
 * @api {put} /api/cervejarias/:idCervejaria Requisição de alteração de dados de cadastro de cervejarias
 * @apiGroup Cervejarias
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 * 
 * @apiParam {Number} idCervejaria id da cervejaria ter cadastro alterado - ID único
 *
 * @apiParam (Request Body) {String} nomeFantasia Nome Fantasia da cervejaria
 * @apiParam (Request Body) {String} razaoSocial Razão social da cervejaria
 * @apiParam (Request Body) {Number} telefone Número de telefone da cervejaria
 * @apiParam (Request Body) {Number} cnpj Número do CNPJ da cervejaria
 * @apiParam (Request Body) {Object[]} endereco Informações de endereço da cervejaria
 * @apiParam (Request Body) {String} endereco.nomeRua Nome da rua em que fica localizada a cervejaria
 * @apiParam (Request Body) {Number} endereco.numero Número do imóvel em que fica localizada a cervejaria
 * @apiParam (Request Body) {String} endereco.bairro Nome do bairro em que fica localizada a cervejaria
 * @apiParam (Request Body) {String} endereco.cidade Nome da cidade em que fica localizada a cervejaria
 * @apiParam (Request Body) {String} endereco.estado Estado em que fica localizada a cervejaria
 * @apiParam (Request Body) {Number} endereco.cep Número do CEP da rua em que fica localizada a cervejaria
 *
 * @apiSuccess {Object} cervejaria Mensagem de sucesso na alteração do cadastro
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *  {
    "message": "Cadastro atualizado com sucesso!"
    }
 *
 * @apiError erro Erro ao salvar os dados da cervejaria
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Campos inválidos"
 *     }
 */
router.put('/:idCervejaria', isAuthenticated, eCervejaria, cervejariasController.put);

module.exports = router;