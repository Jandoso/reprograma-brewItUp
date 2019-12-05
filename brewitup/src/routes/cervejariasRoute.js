const express = require('express');
const router = express.Router();
const cervejariasController = require('../controllers/cervejariasController');

router.get('/', cervejariasController.get);
router.get('/:id/products', cervejariasController.getProductsByBreweryId);
router.post('/', cervejariasController.post);
router.delete('/:id', cervejariasController.delete);

module.exports = router;