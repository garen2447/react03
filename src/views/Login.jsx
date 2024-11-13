// src/views/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';  // Para redirigir al dashboard después de un login exitoso
import firebase from '../config/firebase';

// Access db and auth from the default import
const { auth } = firebase;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Función para manejar el login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);  // Firebase authentication

      // Redirige al Dashboard si el login es exitoso
      navigate('/dashboard');  
    } catch (err) {
      // Manejo de errores específicos de Firebase
      if (err.code === 'auth/user-not-found') {
        setError('El usuario no fue encontrado. Verifica el correo electrónico.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Contraseña incorrecta. Por favor, intenta nuevamente.');
      } else {
        setError('Hubo un error con el inicio de sesión. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}  {/* Mostrar el error si existe */}

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Actualiza el estado del email
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Actualiza el estado de la contraseña
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar sesión'}
        </button>
      </form>

      <p>No tienes una cuenta? <a href="/register">Regístrate</a></p>  {/* Enlace para registro */}
    </div>
  );
};

export default Login;
