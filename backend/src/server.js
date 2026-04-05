//src/server.js

//importar la app
const app = require('./app');

//defino el puerto
const PORT = 3000;

//levantamos servidor
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto
        http://localhost:${PORT}`);
});