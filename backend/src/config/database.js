//Conexión a base de datos
//importamos sequelize
const {sequelize}=require('sequelize');

//Crear conexion a mysql
const sequelize = new Sequelize('taskmanager','root','NuevaClave123$',
    {
        host:'localhost',
        dialect:'mysql'
    });
//probar conexion
sequelize.authenticate()
.then(()=>console.log('Conexion exitosa'))
.catch(err =>console.error('Fallo la conexion',err));

module.exports = sequelize;