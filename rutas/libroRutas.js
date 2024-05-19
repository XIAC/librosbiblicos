const express = require('express');
const router = express.Router();
const libroControlador = require('../controlador/libroControlador');
router.get('/busqueda', libroControlador.buscarLibro);
router.get('/', libroControlador.getTodosLosLibros);
router.get('/:id', libroControlador.getLibroPorId);
router.post('/', libroControlador.crearLibro);
router.put('/:id', libroControlador.actualizarLibro);
router.delete('/:id', libroControlador.eliminarLibro);

module.exports = router;