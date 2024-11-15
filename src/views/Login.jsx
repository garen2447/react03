// src/views/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';  // Para redirigir al dashboard después de un login exitoso
import firebase from '../config/firebase';
import Header from '../components/Header';  // Importa el Header

// Accede al objeto auth de Firebase
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
      {/* Agregamos el Header en la vista de Login */}
      <Header />

      <div className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
              <h2 className="title is-4 has-text-centered">Iniciar sesión</h2>

              {error && (
                <div className="notification is-danger">
                  <button className="delete" onClick={() => setError('')}></button>
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>
                {/* Campo de Email */}
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Introduce tu email"
                    />
                  </div>
                </div>

                {/* Campo de Contraseña */}
                <div className="field">
                  <label className="label">Contraseña</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Introduce tu contraseña"
                    />
                  </div>
                </div>

                {/* Botón de Iniciar sesión */}
                <div className="field">
                  <div className="control">
                    <button
                      className={`button is-primary is-fullwidth ${loading ? 'is-loading' : ''}`}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Cargando...' : 'Iniciar sesión'}
                    </button>
                  </div>
                </div>
              </form>

              <p className="has-text-centered">
                ¿No tienes una cuenta?{' '}
                <a href="/register" className="has-text-link">
                  Regístrate
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
