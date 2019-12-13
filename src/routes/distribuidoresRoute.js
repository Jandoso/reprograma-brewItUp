const express = require('express');
const router = express.Router();
const distribuidoresController = require('../controllers/distribuidoresController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);


/**
 * @api {get} /api/distribuidores Requisição de lista completa de distribuidores cadastradas
 * @apiGroup Distribuidores
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 *
 *
 * @apiSuccess {Object} distribuidor Cadastro completo do distribuidor
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *      {
    {
    "distribuidores": [
        {
            "_id": "5deed1488a02c44be455657c",
            "nomeFantasia": "LogBrew",
            "razaoSocial": "logBrew Distribuidora Ltda",
            "endereco": [
                {
                    "_id": "5deed1488a02c44be455657d",
                    "nomeRua": "Rua Leogildo Salvagni",
                    "numero": 816,
                    "bairro": "Parque Primeiro de Maio",
                    "cidade": "Piracicaba",
                    "cep": 13425130
                }
            ],
            "telefone": 19981203354,
            "cnpj": 123456789000110,
            "camaraFria": true,
            "caminhaoRefrigerado": true,
            "createdAt": "2019-12-09T22:57:12.284Z",
            "updatedAt": "2019-12-09T22:57:12.284Z",
            "__v": 0
        }
    ]
}
 *
 * @apiError erro Erro ao retornar lista de distribuidores cadastrados
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "erro": "Houve um erro ao retornar a lista de distribuidores"
 *     }
 */


router.get('/', distribuidoresController.get);


/**
 * @api {post} /api/distribuidores Requisição de cadastro completo de distribuidores
 * @apiGroup Distribuidores
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 *
 * @apiParam (Request Body) {String} nomeFantasia Nome Fantasia do distribuidor
 * @apiParam (Request Body) {String} razaoSocial Razão social do distribuidor
 * @apiParam (Request Body) {Number} telefone Número de telefone do distribuidor
 * @apiParam (Request Body) {Number} cnpj Número do CNPJ do distribuidor
 * @apiParam (Request Body) {Object[]} endereco Informações de endereço do distribuidor
 * @apiParam (Request Body) {String} endereco.nomeRua Nome da rua em que fica localizada o distribuidor
 * @apiParam (Request Body) {Number} endereco.numero Número do imóvel em que fica localizada o distribuidor
 * @apiParam (Request Body) {String} endereco.bairro Nome do bairro em que fica localizada o distribuidor
 * @apiParam (Request Body) {String} endereco.cidade Nome da cidade em que fica localizada o distribuidor
 * @apiParam (Request Body) {String} endereco.estado Estado em que fica localizada o distribuidor
 * @apiParam (Request Body) {Number} endereco.cep Número do CEP da rua em que fica localizada o distribuidor
 * @apiParam (Request Body) {Boolean} camaraFria Informação se o distribuidor dispõe de câmara fria própria
 * @apiParam (Request Body) {Boolean} caminhaoRefrigerado Informação se o distribuidor dispõe de cadeira de distribuição refrigerada
 * @apiParam (Request Body) {Boolean} equipeComercial Informação se o distribuidor dispõe de equipe comercial
 * @apiParam (Request Body) {Boolean} sommelier Informação se o distribuidor dispõe de sommelier profissional
 * @apiParam (Request Body) {ObjectId} dadosLogin ID dos dados de login e senha cadastrados pela rota /api/distribuidores/registro (distribuidorusuario)
 *
 * @apiSuccess {Object} distribuidor Cadastro completo do distribuidor
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 201 CREATED
 *     {
    "distribuidor": {
        "_id": "5df3c996287bab139450a0e9",
        "nomeFantasia": "LogBrew",
        "razaoSocial": "logBrew Distribuidora Ltda",
        "endereco": [
            {
                "_id": "5df3c996287bab139450a0ea",
                "nomeRua": "Rua Leogildo Salvagni",
                "numero": 816,
                "bairro": "Parque Primeiro de Maio",
                "cidade": "Piracicaba",
                "cep": 13425130
            }
        ],
        "telefone": 19981203354,
        "cnpj": 123456789000110,
        "camaraFria": true,
        "caminhaoRefrigerado": true,
        "equipeComercial": true,
        "sommelier": false,
        "dadosLogin": "5defd446f9ac9d13cc75008c",
        "createdAt": "2019-12-13T17:25:42.979Z",
        "updatedAt": "2019-12-13T17:25:42.979Z",
        "__v": 0
    }
}
 *
 * @apiError erro Erro ao salvar os dados do distribuidor
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Houve um erro ao criar novo distribuidor, favor verifique os campos informados"
 *     }
 */
router.post('/', distribuidoresController.post);


/**
 * @api {delete} /api/distribuidores/:idDistribuidor Requisição exclusão de cadastro do distribuidor
 * @apiGroup Distribuidores
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 *
 * @apiParam {Number} idDistribuidor id do distribuidor a ser deletado - ID único
 * 
 * @apiSuccess {Object} distribuidor Mensagem de exclusão 
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *      {
              message: "Distribuidor deletado"
        }
 *
 * @apiError erro Erro ao excluir distribuidor
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Não foi possível efeturar a exclusão do cadastro do distribuidor"
 *     }
 */

router.delete('/:idDistribuidor', distribuidoresController.delete);


/**
 * @api {put} /api/distribuidores/:idDistribuidor Requisição de alteração de dados de cadastro de distribuidores
 * @apiGroup Distribuidores
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 * 
 * @apiParam {Number} idDistribuidor id do distribuidor ter cadastro alterado - ID único
 *
 * @apiParam (Request Body) {String} nomeFantasia Nome Fantasia do distribuidor
 * @apiParam (Request Body) {String} razaoSocial Razão social do distribuidor
 * @apiParam (Request Body) {Number} telefone Número de telefone do distribuidor
 * @apiParam (Request Body) {Number} cnpj Número do CNPJ do distribuidor
 * @apiParam (Request Body) {Object[]} endereco Informações de endereço do distribuidor
 * @apiParam (Request Body) {String} endereco.nomeRua Nome da rua em que fica localizada o distribuidor
 * @apiParam (Request Body) {Number} endereco.numero Número do imóvel em que fica localizada o distribuidor
 * @apiParam (Request Body) {String} endereco.bairro Nome do bairro em que fica localizada o distribuidor
 * @apiParam (Request Body) {String} endereco.cidade Nome da cidade em que fica localizada o distribuidor
 * @apiParam (Request Body) {String} endereco.estado Estado em que fica localizada o distribuidor
 * @apiParam (Request Body) {Number} endereco.cep Número do CEP da rua em que fica localizada o distribuidor
 * @apiParam (Request Body) {Boolean} camaraFria Informação se o distribuidor dispõe de câmara fria própria
 * @apiParam (Request Body) {Boolean} caminhaoRefrigerado Informação se o distribuidor dispõe de cadeira de distribuição refrigerada
 * @apiParam (Request Body) {Boolean} equipeComercial Informação se o distribuidor dispõe de equipe comercial
 * @apiParam (Request Body) {Boolean} sommelier Informação se o distribuidor dispõe de sommelier profissional
 *
 * @apiSuccess {Object} distribuidor Mensagem de sucesso na alteração do cadastro
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *  {
    "message": "Cadastro atualizado com sucesso!"
    }
 *
 * @apiError erro Erro ao salvar os dados do distribuidor
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Campos inválidos"
 *     }
 */
router.put('/:idDistribuidor', distribuidoresController.put);


module.exports = router;