import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../config/firebase'; 

const PrivateRoute = ({ children }) => {
  const { auth } = firebase; // Desestructuramos `auth` del objeto importado
  const [user, loading, error] = useAuthState(auth); // Usa `auth` correctamente
  const navigate = useNavigate(); // Usamos navigate para redirigir a otras páginas

  if (loading) {
    return (
      <div className="has-text-centered">
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
        <p>Cargando...</p>
      </div>
    );
  }

  if (error) {
    console.error("Error de autenticación:", error);
    return (
      <div className="notification is-danger is-light has-text-centered">
        <h3 className="title is-4">¡Oops! Hubo un problema al verificar tu autenticación.</h3>
        <p>Por favor, intenta nuevamente más tarde.</p>
      </div>
    ); 
  }

  if (!user) {
    return (
      <div className="section is-medium">
        <div className="notification is-warning is-light has-text-centered">
          <h3 className="title is-4">Acceso no autorizado</h3>
          <p>No estás autorizado para ver esta página. Por favor, inicia sesión o regístrate para continuar.</p>
        </div>
        <div className="buttons is-centered">
          <button 
            className="button is-primary is-medium" 
            onClick={() => navigate("/login")}
          >
            Ir al Login
          </button>
          <button 
            className="button is-link is-medium" 
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
