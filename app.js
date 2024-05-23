const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const { sequelize } = require('./models');
const passportConfig = require('./config/passport');
const libroRutas = require('./routes/libroRutas');
const versiculosRutas = require('./routes/versiculoRutas');
const authRutas = require('./routes/authRutas');
const app = express();
//-----------configuraciones del cors
const corsOption = {
    origin: 'http://www.ejemplo.com',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
};
app.use(cors(corsOption))// cors con opciones configuradas

//------------
//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret: 'clave_secreta',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);


//Rutas
app.use('/auth', authRutas);
app.use('/api/libros', libroRutas);
app.use('/api/versiculos', versiculosRutas);

//levantar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Servidor levantado http://localhost:'+PORT);
});