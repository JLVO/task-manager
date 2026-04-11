import { useEffect, useState } from "react";
import axios from "axios";

function Dashboarb(){
    //Estado de la lista de tareas
    const[task,setTask]=useState([]);
    //Estado para la nueva tarea
    const[title,setTitle]=useState([]);
    //Obtener token guardar
    const token=localStorage.getItem("token");
    //Consulto tareas al backend
    const getTaks=async()=>{
        try{
         const res = await axios.get("http://Localhost:3000/api/task",{
        headers:{
            Authorization:token //enviamos token
        }
    });
    //Guardamos el estado de la tarea
    setTask(res.data);
}catch(error){
    console.error("Error al obtener tareas",error);
}
};

//crear una nueva tarea
const createTask=async()=>{
    try{
        await axios.post("http://localhost:3000/api/task",
            {title},
            {headers:{Authorization:token}}
        );
        //Limpiamos los input
        setTitle("");
        getTaks();
    }catch(error){
        console.error("Error al crear tareas",error);
    }
}

//se ejecuta al cargar el componente
useEffect(()=>{
    getTaks();
},[]);
return(
    <div>
        <h2>Mis Tareas</h2>
        {/input para nueva tareas/}
        <imput
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Nueva Tareas"
        />
        {/*Boton de crear tarea*/}
        <button onClick={createTask}>Crear</button>

        {/*Lista de tareas*/}
        {task.map(t=>(
            <div key={t.id}>
                {t.title}
                </div>
        ))}
    </div>
)
}
export default Dashboarb;