//archivo principal del servidor
//configurar express
const express = require('express');
const cors = require('cors');//permitir conectar el frontend con el cakend
const helmet = require('helmet');//seguridad protefer http

//inicializamos la app
const app = express();

//rutas
const routes = require('./routes');
app.use('/api',routes);

//middleware para leer json(APIS)
app.use(express.json());
app.use(cors());//Seguridad básica
app.use(helmet());//seguridad

//Ruta de prueba
app.get('/', (req,res)=>{
    res.send("API funcionando");
});

//Para usar en el server.js
module.exports = app;