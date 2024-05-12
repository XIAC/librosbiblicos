//llamando nuuestro modelo
const Libro = require('../modelos/Libro');

exports.getTodosLosLibros = async (peticion, respuesta) => {
    try {
        const libros = await  Libro.findAll();
        respuesta.json(libros);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};