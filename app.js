const express = require('express');
const libroRutas = require('./rutas/libroRutas');
const versiculosRutas = require('./rutas/versiculoRutas');
const app = express();
//middleware
app.use(express.json());
//Rutas
app.use('/api/libros', libroRutas);
app.use('/api/versiculos', versiculosRutas);

//levantar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Servidor levantado http://localhost:'+PORT);
});