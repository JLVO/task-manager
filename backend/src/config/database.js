//Conexión a base de datos
//importamos sequelize
const {Sequelize}=require('sequelize');

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

sequelize.sync({alter:true})
.then(()=>{
    console.log('Base de datos sincronizada')
})
.catch((error)=>{
    console.error('Error al sincronizar la base de datos',error);
});
module.exports = sequelize;