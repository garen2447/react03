// src/views/Register.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import firebase from '../config/firebase';
import Header from '../components/Header';  // Importa el Header

// Accede al objeto auth y db de Firebase
const { auth, db } = firebase;

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');  // Limpiar el mensaje de error antes de iniciar el proceso

    try {
      // Crear usuario con email y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Actualizar el perfil del usuario
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      // Guardar información adicional en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });

      // Redirigir al Dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Error al registrar usuario:', err);
      setError(getErrorMessage(err));  // Mensaje de error más detallado
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener un mensaje de error más legible
  const getErrorMessage = (error) => {
    if (error.code === 'auth/email-already-in-use') {
      return 'Este correo electrónico ya está en uso. Intenta con otro.';
    } else if (error.code === 'auth/weak-password') {
      return 'La contraseña debe tener al menos 6 caracteres.';
    } else {
      return 'Hubo un error al registrar. Por favor, intenta nuevamente.';
    }
  };

  return (
    <div>
      {/* Agregamos el Header en la vista de Register */}
      <Header />

      <div className="container is-fluid">
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
              <h2 className="title is-4 has-text-centered">Crear Cuenta</h2>

              {/* Mostrar error si existe */}
              {error && (
                <div className="notification is-danger">
                  <button className="delete" onClick={() => setError('')}></button>
                  {error}
                </div>
              )}

              <form onSubmit={handleRegister}>
                {/* Nombre */}
                <div className="field">
                  <label className="label">Nombre</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      placeholder="Introduce tu nombre"
                    />
                  </div>
                </div>

                {/* Apellido */}
                <div className="field">
                  <label className="label">Apellido</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      placeholder="Introduce tu apellido"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Introduce tu correo electrónico"
                    />
                  </div>
                </div>

                {/* Contraseña */}
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

                {/* Botón de registro */}
                <div className="field">
                  <div className="control">
                    <button
                      className={`button is-primary is-fullwidth ${loading ? 'is-loading' : ''}`}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Registrando...' : 'Crear Cuenta'}
                    </button>
                  </div>
                </div>
              </form>

              <p className="has-text-centered">
                ¿Ya tienes una cuenta?{' '}
                <a href="/login" className="has-text-link">
                  Iniciar sesión
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
