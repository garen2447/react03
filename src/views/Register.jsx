import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
// Register.jsx
import firebase from '../config/firebase';

// Access db and auth from the default import
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
      // Verifica si 'auth' está correctamente configurado
      console.log("Instancia de auth:", auth);

      // Paso 1: Crear usuario con email y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Paso 2: Actualizar el perfil del usuario
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      // Paso 3: Guardar información adicional en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });

      // Paso 4: Redirigir al Dashboard
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
      <h2>Registro</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <form onSubmit={handleRegister}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Crear Cuenta'}
        </button>
      </form>

      <p>Ya tienes una cuenta? <a href="/login">Iniciar sesión</a></p>
    </div>
  );
};

export default Register;
