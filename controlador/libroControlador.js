//llamando nuuestro modelo
const Libro = require('../modelos/Libro');
const { Op } = require('sequelize'); 
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

exports.getLibroPorId = async (peticion, respuesta) => {
    try {
       const { id } =  peticion.params;
       const libro = await Libro.findByPk(id);
        if (libro) 
            respuesta.json(libro);
        else
            respuesta.status(404).send({mensaje: 'Libro No Encontrado'})
    } 
    catch (error) {
        respuesta.status(500).send(error);
    }
};

exports.crearLibro = async (peticion, respuesta) => {
    try {
        const nuevoLibro = await Libro.create(peticion.body);
        respuesta.status(201).json(nuevoLibro);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};

exports.actualizarLibro = async (peticion, respuesta) => {
    try {
        const { id } =  peticion.params;
        const [libroActualizado] = await Libro.update(peticion.body,{
            where : {idLibro: id}
        });
        if (libroActualizado){
            const libro = await Libro.findByPk(id);
            respuesta.json(libro);
        } else {
            respuesta.status(404).json({mensaje: 'Libro no encontrado'})
        }
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};

exports.eliminarLibro = async (peticion, respuesta) => {
    try {
        const { id } =  peticion.params;
        const eliminado =  await Libro.destroy({
            where : {idLibro : id}
        });
        if (eliminado)
            respuesta.status(200).json({mensaje: 'Libro eliminado'});
        else
            respuesta.status(404).json({mensaje: 'Libro no encontrado'});
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};

exports.buscarLibro = async (peticion, respuesta) => {
    try {
        const { nombre } = peticion.query;
        const libros = await Libro.findAll({
            where : { nombre : { [Op.like] : `%${nombre}%`} }
        });
        respuesta.json(libros);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};