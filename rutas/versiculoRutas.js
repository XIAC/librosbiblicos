const express = require('express');
const router = express.Router();
const versiculoControlador = require('../controlador/versiculoControlador');
router.get('/', versiculoControlador.getTodosLosVersiculos);
// CONSULTAS - REPORTES
// BUSCAR VERSICULOS DE UN LIBRO : NUMEROS
router.get('/libro/:nombreLibro', versiculoControlador.getVersiculosPorLibro);
// contar versiculos por cada libro
router.get('/contar', versiculoControlador.contarVersiculosPorLibro);

module.exports = router;