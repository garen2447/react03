import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/Login.jsx";
import Home from "../views/Home.jsx";
import Dashboard from "../views/Dashboard.jsx"; 
import PrivateRoute from "../components/PrivateRoute.jsx"; 
import Register from "../views/Register.jsx"; 
import NotFound from "../views/NotFound.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Ruta de Registro */}

        {/* Ruta restringida, solo accesible por usuarios autenticados */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />

        {/* Ruta 404 - Página no encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
