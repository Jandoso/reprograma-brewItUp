const distribuidorAuthController = require('../controllers/distribuidoresAuthController')
const express = require('express');
const router = express.Router();

router.post('/registro', distribuidorAuthController.registro);
router.post('/login', distribuidorAuthController.login);

module.exports = router;
