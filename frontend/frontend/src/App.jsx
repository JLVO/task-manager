//Importamos React Router
import { BrowserRouter, Routes,Route } from "react-router-dom";

//Importamos nuestras páginas
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"

function App() {
    return (
        <BrowserRouter>
        <Routes>
            {/*Ruta de Login*/}
            <Route path="/" element={<Login/>}/>
            {/* Ruta dashboard*/}
            <Route path="/Dashboard" element={<Dashboard/>}/>
           
        </Routes>
        </BrowserRouter>
        );
}

export default App;