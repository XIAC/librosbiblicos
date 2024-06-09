const express = require('express');
const router = express.Router();
const authControlador = require('../controllers/authControlador');
router.get('/verregistro', (req, res) => {
    res.render('registro');
});
// router.get('/', authControlador.bienvenida);
router.post('/registro', authControlador.registroUsuario);
router.post('/inicio-sesion', authControlador.inicioSesion);
router.post('/cierre-sesion', authControlador.cierreSesion);
module.exports = router;
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const passport = require('passport');
// const { User } =  require('../models');
// const router = express.Router();

// router.post('/registro', async ( req, res) => {
//     const {username, password} = req.body;
//     const contrasenaEncriptada =  await bcrypt.hash(password, 10);
//     try {
//         const usuarioCreado = await User.create({ username, password: contrasenaEncriptada });
//         console.log(usuarioCreado);
//         res.status(201).send('usuario creado');
//     } catch(error){
//         console.log(error);
//         res.status(400).send('Error al crear usuario');
//     }
// });

// router.post('/inicio-sesion', async (req, res) =>{
//     passport.authenticate('local', (err, usuario, info) => {
//         if (err)
//             return next(err);
//         if (!usuario) {
//             return res.status(400).send(info.message);
//         }
//         req.logIn(usuario, (error) => {
//             if (error)
//                 return next(error);
//             return res.send('Autenticado!!');
//         });
//     })(req, res);
// })

// router.post('/cierre-sesion', async (req, res) =>{
//     req.logout((err) => {
//         if (err) {
//             return res.status(500).send('Erro al cerrar la sesion');
//         }
//         res.send('Sesion cerrada');
//     }); 
// });
// module.exports = router;