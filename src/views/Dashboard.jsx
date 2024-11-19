// src/views/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import firebase from '../config/firebase';

// Access db and auth from the default import
const { auth } = firebase;

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // Indicador de carga
  const [errorMessage, setErrorMessage] = useState('');  // Mensaje de error si no está autorizado
  const navigate = useNavigate();

  // Verifica si el usuario está autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);  // Si el usuario está autenticado, actualiza el estado
        setLoading(false);  // Deja de mostrar el loader
        setErrorMessage(''); // Limpiar el mensaje de error
      } else {
        setLoading(false);  // Deja de mostrar el loader
        setErrorMessage('No estás autorizado para ver esta página.');  // Muestra el mensaje de error
      }
    });

    // Cleanup para cancelar la suscripción cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  // Si está cargando, muestra un loader
  if (loading) {
    return <div className="has-text-centered">Cargando...</div>;
  }

  // Función para cerrar sesión
  const handleLogout = async () => {
    try {
      await signOut(auth);  // Cierra la sesión de Firebase
      navigate('/login');   // Redirige al login después de cerrar sesión
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  };

  return (
    <div className="container is-fluid">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="box">
            <h2 className="title is-3 has-text-centered">Dashboard</h2>
            
            {errorMessage && !user && (
              <div className="notification is-danger has-text-centered">
                {errorMessage}
              </div>
            )}

            {user ? (
              <div>
                <div className="has-text-centered">
                  <h3 className="title is-4">Bienvenido, <span className="has-text-primary">{user.displayName}</span></h3>
                  <p className="subtitle is-5">Este es tu dashboard, desde aquí puedes gestionar tu cuenta.</p>
                </div>

                <div className="has-text-centered mt-5"> 
                  <button 
                    className="button is-danger is-medium" 
                    onClick={handleLogout}
                  >
                    <strong>Cerrar sesión</strong>
                  </button>
                </div>
              </div>
            ) : (
              <div className="has-text-centered">
                {/* Este mensaje se mostrará cuando no haya usuario autenticado */}
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
