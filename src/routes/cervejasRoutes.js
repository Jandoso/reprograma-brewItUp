const express = require('express');
const router = express.Router();
const cervejasController = require('../controllers/cervejasController')

const { isAuthenticated, eCervejaria } = require('../middlewares/auth')


/**
 * @api {get} /api/cervejas/:cervejariaId Requisição de lista completa de cervejas (produtos) de determinada cervejaria cadastrada
 * @apiGroup Cervejas
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 *
 * @apiParam {Number} cervejariaId id da cervejaria - ID único
 *
 * @apiSuccess {Object} cervejas Lista de cervejas de determinada cervejaria
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *      [{
            "_id": "5df0232729882e4aa892d845",
            "nome": "Caputi",
            "estilo": "American Stadart Lager",
            "escola": "Americana",
            "teorAlcoolico": 3.8,
            "embalagem": "Garrafa de vidro",
            "volume": 600,
            "quantidade": 100,
            "preco": 6,
            "cervejaria": "5deed0308a02c44be455657a",
            "descricao": "A CAPUTI MUNICH HELLES é uma cerveja de baixa fermentação que tem sua origem na cidade de Munique na Alemanha. Possui coloração do amarelo intenso para dourado, tem aromas maltados e florais e apresenta sabor maltado bem equilibrado com o amargor. É produzida apenas com maltes e lúpulos alemães que confere uma excelente qualidade a cerveja, com 5,2% de teor alcoólico é uma cerveja leve e refrescante, excelente para o dia a dia.\n",
            "pasteurizada": "false",
            "createdAt": "2019-12-10T22:58:47.985Z",
            "updatedAt": "2019-12-10T22:58:47.985Z",
            "__v": 0
        }]
 *
 * @apiError erro Cervejaria não encontrada - O ID informado não retornou nenhuma cervejeria
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 404 Not Found
 *     {
 *       "erro": "Não localizamos nenhuma cervejaria com o ID informado"
 *     }
 */

router.get('/:cervejariaId', isAuthenticated, cervejasController.getCervejasCervejaria);

router.get('/lista/:escola', isAuthenticated, cervejasController.getCervejaPorEscola);

/**
 * @api {post} /api/cervejas/create/:cervejariaId Requisição de cadastro de cerveja para determinada cervejaria
 * @apiGroup Cervejas
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 * 
 *  @apiParam {Number} cervejariaId id da cervejaria - ID único
 *
 * @apiParam (Request Body) {String} nome Nome Comercial da cerveja
 * @apiParam (Request Body) {String} estilo Estilo em qual a cerveja de enquadra de acordo com o guia de estilo do Brewers Judge Certification Programme - BJCP
 * @apiParam (Request Body) {String} escola Escola cervejeira em qual a cerveja se enquadra, podendo ser: Americana, Belga, Alemã ou Inglesa
 * @apiParam (Request Body) {Number} teorAlcoolico Teor Alcoólico da cerveja em ABV%(Alcohol by Volume %)
 * @apiParam (Request Body) {String} embalagem Tipo de embalagem da cerveja. Podendo ser: garrafa de vidro, lata, garrafa pet, barril de inox retornável ou keg descartável.
 * @apiParam (Request Body) {Number} volume Volume do recipiente em que a cerveja está condicionada. Por exemplo: 330, 1000, 30000
 * @apiParam (Request Body) {Number} quantidade Quantidade do produto em embalagem em questão no estoque
 * @apiParam (Request Body) {Number} preco Preço da unidade
 * @apiParam (Request Body) {ObjectId} cervejaria ID do cadastro da cervejaria em questão - Deve ser o mesmo do informado na rota
 * @apiParam (Request Body) {String} descricao Breve descrição da cerveja
 * @apiParam (Request Body) {Boolean} pasteurizada Informação se a cerveja é pasteurizada ou não
 * @apiParam (Request Body) {Buffer} foto Imagem ilustrativa da cerveja
 *
 * @apiSuccess {Object} cerveja Cadastro completo da cerveja
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 201 CREATED
 *    {
    "_id": "5df3d71559091026806b2233",
    "nome": "Caputi",
    "estilo": "American Stadart Lager",
    "escola": "Americana",
    "teorAlcoolico": 3.8,
    "embalagem": "Garrafa de vidro",
    "volume": 600,
    "quantidade": 100,
    "preco": 6,
    "cervejaria": "5deed0308a02c44be455657a",
    "descricao": "A CAPUTI MUNICH HELLES é uma cerveja de baixa fermentação que tem sua origem na cidade de Munique na Alemanha. Possui coloração do amarelo intenso para dourado, tem aromas maltados e florais e apresenta sabor maltado bem equilibrado com o amargor. É produzida apenas com maltes e lúpulos alemães que confere uma excelente qualidade a cerveja, com 5,2% de teor alcoólico é uma cerveja leve e refrescante, excelente para o dia a dia.\n",
    "pasteurizada": "false",
    "createdAt": "2019-12-13T18:23:17.592Z",
    "updatedAt": "2019-12-13T18:23:17.592Z",
    "__v": 0
}
 *
 * @apiError erro Erro ao salvar a imagem ilustrativa da cerveja
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Não foi possível fazer upload da imagem"
 *     }
 * 
 *  * @apiError erro Erro ao salvar a imagem ilustrativa da cerveja - imagem excede o tamanho permitido
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "A imagem não deve ter mais que 1mb"
 *     }
 */

// router.use(cervejariaAuthMiddleware)
router.post('/create/:cervejariaId', isAuthenticated, eCervejaria ,cervejasController.postCervejas);

/**
 * @api {put} /api/cervejas/:cervejaId Requisição de alteração de cadastro de cerveja para determinada cervejaria
 * @apiGroup Cervejas
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 * 
 *  @apiParam {Number} cervejaId id da cerveja - ID único
 *
 * @apiParam (Request Body) {String} nome Nome Comercial da cerveja
 * @apiParam (Request Body) {String} estilo Estilo em qual a cerveja de enquadra de acordo com o guia de estilo do Brewers Judge Certification Programme - BJCP
 * @apiParam (Request Body) {String} escola Escola cervejeira em qual a cerveja se enquadra, podendo ser: Americana, Belga, Alemã ou Inglesa
 * @apiParam (Request Body) {Number} teorAlcoolico Teor Alcoólico da cerveja em ABV%(Alcohol by Volume %)
 * @apiParam (Request Body) {String} embalagem Tipo de embalagem da cerveja. Podendo ser: garrafa de vidro, lata, garrafa pet, barril de inox retornável ou keg descartável.
 * @apiParam (Request Body) {Number} volume Volume do recipiente em que a cerveja está condicionada. Por exemplo: 330, 1000, 30000
 * @apiParam (Request Body) {Number} quantidade Quantidade do produto em embalagem em questão no estoque
 * @apiParam (Request Body) {Number} preco Preço da unidade
 * @apiParam (Request Body) {ObjectId} cervejaria ID do cadastro da cervejaria em questão - Deve ser o mesmo do informado na rota
 * @apiParam (Request Body) {String} descricao Breve descrição da cerveja
 * @apiParam (Request Body) {Boolean} pasteurizada Informação se a cerveja é pasteurizada ou não
 * @apiParam (Request Body) {Buffer} foto Imagem ilustrativa da cerveja
 *
 * @apiSuccess {Object} cerveja Cadastro completo da cerveja
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *  {
    "mensagem": "Produto atualizado com sucesso!"
    }
 *
 * @apiError erro Erro ao salvar os dados da cerveja
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Campos inválidos"
 *     }
 * 
 * @apiError erro Erro ao localizar a cerveja a ser alterada
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": "Houve um erro ao localizar a cerveja, por favor tente novamente"
 *     }
 * 
 * @apiError erro Erro ao localizar a cerveja a ser alterada - cadastro inexistente
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": `Cerveja com o código ${cervejaId} não foi localizada`
 *     }
 
  * @apiError erro Erro ao salvar as alterações
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "erro": err
 *     }
 */

router.put('/:cervejaId', isAuthenticated, eCervejaria, cervejasController.alterarCerveja);


/**
 * @api {delete} /api/cervejas/:cervejaId Requisição de exclusão de cadastro de determinada cerveja
 * @apiGroup Cervejas
 * 
 * @apiHeader {String} authorization Token de autorização
 * @apiHeaderExample 
 *  Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjI4ODhmNTlkMmE1MGFmODU3ZTY4ZCIsImlhdCI6MTU3NjI0OTY4M30.ULtAzi3jjvf2LBgdqWKsBx7FX-NL2u8J5-bHn55CrOE
 *
 * @apiParam {Number} cervejaId id da cerveja a ser deletado - ID único
 * 
 * @apiSuccess {Object} cerveja Mensagem de exclusão 
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *      {
            mensagem: `Cerveja com o código ${cervejaId} foi deletada com sucesso`
        }
 *
 * @apiError erro Erro ao localizar o cadastro da cerveja a ser excluída 
 *
 * @apiErrorExample {json} Erro
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "erro": `Cerveja com o código ${cervejaId} não foi localizada`
 *     }
 */

router.delete('/:cervejaId', isAuthenticated, eCervejaria, cervejasController.excluirCerveja);



module.exports = router;