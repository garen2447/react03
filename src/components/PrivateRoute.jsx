import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useAuthState } from 'react-firebase-hooks/auth';
// Importa el objeto completo desde firebase.js (usando la exportación por defecto)
import firebase from '../config/firebase'; // Importamos el objeto completo

const PrivateRoute = ({ children }) => {
  const { auth } = firebase; // Desestructuramos `auth` del objeto importado
  const [user, loading, error] = useAuthState(auth); // Usa `auth` correctamente
  const navigate = useNavigate(); // Usamos navigate para redirigir a otras páginas

  if (loading) {
    return <div className="has-text-centered">Cargando...</div>; // Muestra un indicador de carga mientras se verifica el estado de autenticación
  }

  if (error) {
    console.error("Error de autenticación:", error);
    return <div className="has-text-danger has-text-centered">Error en la autenticación</div>; // Muestra un mensaje de error si ocurre un problema con la autenticación
  }

  // Si el usuario no está autenticado, muestra un mensaje de "No autorizado" y los botones
  if (!user) {
    return (
      <div className="section is-medium">
        <div className="notification is-danger">
          <h3 className="title is-4">No estás autorizado para ver esta página.</h3>
        </div>
        <div className="buttons is-centered is-inline-flex">
          <button 
            className="button is-primary is-small mr-2" 
            onClick={() => navigate("/login")}
          >
            Ir al Login
          </button>
          <button 
            className="button is-link is-small" 
            onClick={() => navigate("/register")}
          >
            Ir al Registro
          </button>
        </div>
      </div>
    );
  }

  // Si el usuario está autenticado, renderiza el contenido protegido (children)
  return children;
};

export default PrivateRoute;
