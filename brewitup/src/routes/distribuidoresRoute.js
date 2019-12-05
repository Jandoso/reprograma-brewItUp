const express = require('express');
const router = express.Router();
const distribuidoresController = require('../controllers/distribuidoresController');

router.get('/', distribuidoresController.get);
router.post('/', distribuidoresController.post);

module.exports = router;