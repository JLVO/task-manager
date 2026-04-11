const jwt = require('jsonwebtoken');

//
const generarToken=(user)=>{
    return jwt.sing(
        {
            id:user.id //payload(Datos dentro del token)
        },
        "secreto", //Clave Secreta
        {
            experesIn:'1h' //Duración
        }
    )
}
module.exports = generarToken;