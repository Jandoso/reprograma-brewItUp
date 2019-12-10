const cervejariaAuthController = require('../controllers/cervejariasAuthController')
const express = require('express');
const router = express.Router();

router.post('/registro', cervejariaAuthController.registro);
router.post('/login', cervejariaAuthController.login);
router.get('/logout', cervejariaAuthController.logout);

module.exports = router;
