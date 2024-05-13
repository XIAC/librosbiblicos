const Versiculo = require('../modelos/Versiculo');

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