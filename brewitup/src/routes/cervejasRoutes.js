const express = require('express');
const router = express.Router();
const cervejasController = require('../controllers/cervejasController')

router.post('/create', cervejasController.postCervejas);
router.get('/lista/:cervejariaId', cervejasController.getCervejasCervejaria)
module.exports = router;