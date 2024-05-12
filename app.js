const express = require('express');
const libroRutas = require('./rutas/libroRutas');
const app = express();
//middleware
app.use(express.json());
//Rutas
app.use('/api/libros',libroRutas);
//levantar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Servidor levantado http://localhost:'+PORT);
});