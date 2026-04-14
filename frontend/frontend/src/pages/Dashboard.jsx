import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  // Estado de la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Estado para nueva tarea (texto)
  const [title, setTitle] = useState("");

  // Obtener token guardado
  const token = localStorage.getItem("token");

  //Obtener tareas del backend
  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/tasks", {
        headers: {
          Authorization: token
        }
      });

      // Guardamos tareas en estado
      setTasks(res.data);

    } catch (error) {
      console.error("Error al obtener tareas", error);
    }
  };

  // Crear nueva tarea
  const createTask = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/tasks",
        { title },
        {
          headers: { Authorization: token }
        }
      );

      // Limpiar input
      setTitle("");

      // Recargar tareas
      getTasks();

    } catch (error) {
      console.error("Error al crear tarea", error);
    }
  };

  //Se ejecuta al cargar el componente
  useEffect(() => {
    const fetchTasks = async () => {
      try{
        const res = await axios.get("http://localhost:3000/api/tasks",{
          headers:{Authorization:token}
        });
        setTasks(res.data);
      }catch(error){
        console.error("Error al obtener tareas",error);
      }
    };
    fetchTasks();
  },[token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 
    to-indigo-600 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl">
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Mis Tareas
          </h1>

      {/* Input para nueva tarea */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea"
      />

      {/* Botón crear */}
      <button onClick={createTask}>Crear</button>

      {/* Lista de tareas */}
      {tasks.map((t) => (
        <div key={t.id}>
          {t.title}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Dashboard;