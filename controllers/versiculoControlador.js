const Versiculo = require('../modelos/Versiculo');
const Libro = require('../modelos/Libro');
const sequelize = require('../config/database');
const Seq =  require('sequelize');

exports.getTodosLosVersiculos = async (peticion, respuesta) => {
    try {
        const versiculos = await  Versiculo.findAll();
        respuesta.json(versiculos);
    } 
    catch (error) {
        console.log(error);
        respuesta.status(500).send(error);
    }
};

exports.getVersiculosPorLibro = async (peticion, respuesta) => {
    const { nombreLibro } = peticion.params;
    try {
        const libroEncontrado = await Libro.findOne({ where : { nombre: nombreLibro } } );
        if (!libroEncontrado)
            return respuesta.status(404).json({mensaje: 'Libro no encontrado'});
        const todosVersiculos = await Versiculo.findAll({
            where : {idLibro : libroEncontrado.idLibro },
            include: [{ model: Libro, as: 'libros' }]
        });
        respuesta.json(todosVersiculos);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).send(error);
    }
}

exports.contarVersiculosPorLibro = async (peticion, respuesta) => {
    try {
        const todosVersiculos = await Versiculo.findAll({
            attributes: [
                'idLibro',
                [Seq.fn('COUNT', Seq.col('idVersiculos')), 'contarVersiculos' ]
            ],
            group: ['idLibro'],
            include: [{ model: Libro, as: 'libros', attributes: ['nombre'] }]
        });
        respuesta.json(todosVersiculos);
    }
    catch(error){
        console.log(error);
        respuesta.status(500).send(error);
    }
}