const express = require('express');
const router = express.Router();
const cervejasController = require('../controllers/cervejasController')
const authMiddleware = require('../middlewares/auth');
const { eCervejaria } = require('../controllers/cervejariasAuthController');

router.use(authMiddleware);


router.get('/:cervejariaId', cervejasController.getCervejasCervejaria);
router.post('/create', eCervejaria, cervejasController.postCervejas);
router.put('/:cervejaId', eCervejaria, cervejasController.alterarCerveja);
router.delete('/:cervejaId', eCervejaria, cervejasController.excluirCerveja);

module.exports = router;