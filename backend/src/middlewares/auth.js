const jwt= require('jsonwebtoken');

//Middleware que protege rutas
const verificarToken=(req,res,next)=>{
    //obtner token del header
    const token = req.header('Authorization');

    if(!token){
        return res.status(401).json(
            {mensaje:'Acceso denegado'});
    }

    try{
        //Verificar token
        const decoded=jwt.verify(token,"secreto");
        //guardamos info del usuario
        req.user=decoded;
        next();
    }catch(error){
        return res.status(400).json(
            {mensaje:'Token invalido'});
    }
};
module.exports = verificarToken;