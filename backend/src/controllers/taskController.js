const { where } = require('sequelize');
const {Task}=require('../models');
//obtener las tareas 
exports.getTasks=async(req,res)=>{
    const tasks = await Task.findAll({
    where:{UserId:req.user.id,activa:true}//Solo tareas del usuario
    });
    res.json(tasks);
};

//crear tareas
exports.createTask=async(req,res)=>{
    const task = await Task.create({
        title:req.body.title,
        description:req.body.description,
        UserId:req.user.id
    });
    res.json(task);
};

//actualizar tareas
exports.updateTask=async(req,res)=>{
    const{id}=req.params;
    await Task.update(req.body,{
        where:{id}
    });
    res.json({mensaje:'Tarea actualizada'});
};
//eliminar tareas
exports.deleteTask=async(req,res)=>{
    const{id}=req.params;
    await Task.destroy({
        where:{id}
    });
    res.json({mensaje:'Tarea eliminada'});
};

//Eliminar tareas de forma lógica
exports.deleteTaskLogic=async(req,res)=>{
    const{id}=req.params;
    await Task.update({activa:false},{
        where:{id,UserId:req.user.id}
    });
    res.json({mensaje:'Tarea eliminada de forma lógica'
    });
}