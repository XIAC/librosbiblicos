const express = require('express');
const router = express.Router();
const versiculoControlador = require('../controlador/versiculoControlador');
router.get('/', versiculoControlador.getTodosLosVersiculos);
module.exports = router;