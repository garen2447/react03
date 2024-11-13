import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/Login.jsx"
import Home from "../views/Home.jsx"
import Dashboard from "../views/Dashboard.jsx"; // Importa la página restringida
import PrivateRoute from "../components/PrivateRoute.jsx"; // Importa el componente PrivateRoute
import Register from "../views/Register.jsx"; // Componente de Registro


const AppRouter = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  {/* Ruta de Registro */}


        {/* Ruta restringida, solo accesible por usuarios autenticados */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;