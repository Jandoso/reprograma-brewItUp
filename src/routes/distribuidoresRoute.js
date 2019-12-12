const express = require('express');
const router = express.Router();
const distribuidoresController = require('../controllers/distribuidoresController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);
router.get('/', distribuidoresController.get);
router.post('/', distribuidoresController.post);
router.delete('/:idDistribuidor', distribuidoresController.delete);


module.exports = router;