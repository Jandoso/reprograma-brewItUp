const express = require('express');
const router = express.Router();
const cervejariasController = require('../controllers/cervejariasController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);
router.get('/', cervejariasController.get);
router.post('/', cervejariasController.post);
router.delete('/:idCervejaria', cervejariasController.delete);
router.put('/:idCervejaria', cervejariasController.put);

module.exports = router;