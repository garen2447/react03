import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
// Importa el objeto completo desde firebase.js (usando la exportación por defecto)
import firebase from '../config/firebase'; // Importamos el objeto completo

const PrivateRoute = ({ children }) => {
  const { auth } = firebase; // Desestructuramos `auth` del objeto importado

  const [user, loading, error] = useAuthState(auth); // Usa `auth` correctamente

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while checking auth state
  }

  if (error) {
    console.error("Authentication error:", error);
    return <div>Error in authentication</div>; // Display error message if there's an auth issue
  }

  // If the user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the protected route (children)
  return children;
};

export default PrivateRoute;
