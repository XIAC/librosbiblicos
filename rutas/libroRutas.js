const express = require('express');
const router = express.Router();
const libroControlador = require('../controlador/libroControlador');

router.get('/', libroControlador.getTodosLosLibros);

module.exports = router;