const cervejariaAuthController = require('../controllers/cervejariasAuthController')
const express = require('express');
const router = express.Router();

router.post('/registro', cervejariaAuthController.registro);
router.post('/login', cervejariaAuthController.login);

module.exports = router;
