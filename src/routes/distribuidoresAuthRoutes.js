const distribuidorAuthController = require('../controllers/distribuidoresAuthController')
const express = require('express');
const router = express.Router();

router.get('/login', distribuidorAuthController.getLogin);
router.get('/registro', distribuidorAuthController.getRegistro)
router.post('/registro', distribuidorAuthController.registro);
router.post('/login', distribuidorAuthController.login);
router.get('/logout', distribuidorAuthController.logout);
module.exports = router;
