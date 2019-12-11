const express = require('express');
const router = express.Router();
const cervejasController = require('../controllers/cervejasController')
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);
router.post('/create', cervejasController.postCervejas);
router.get('/:cervejariaId', cervejasController.getCervejasCervejaria);
router.put('/:cervejaId', cervejasController.alterarCerveja);
router.delete('/:cervejaId', cervejasController.excluirCerveja);

module.exports = router;