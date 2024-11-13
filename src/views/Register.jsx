import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../config/firebase';  // Asegúrate de que 'auth' esté siendo importado correctamente
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import db from '../config/firebase';  // Asegúrate de que 'db' esté siendo importado correctamente

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
    console.log("Formulario de registro enviado");

    try {
      // Paso 1: Verifica que auth esté correctamente importado
      console.log("Creando usuario con email:", email);
      console.log("Configuración de auth:", auth);

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Usuario creado con éxito:", user);

      // Paso 2: Actualizar el perfil del usuario
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      console.log("Perfil actualizado");

      // Paso 3: Guardar datos en Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        createdAt: new Date(),
      });
      console.log("Datos guardados en Firestore");

      // Paso 4: Redirigir al Dashboard
      navigate('/dashboard');
      console.log("Redirigiendo al Dashboard...");
    } catch (err) {
      console.error("Error al registrar usuario:", err);  // Muestra el error detallado

      if (err.code === 'auth/email-already-in-use') {
        setError('Este correo electrónico ya está en uso. Intenta con otro.');
      } else if (err.code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres.');
      } else {
        setError('Hubo un error al registrar. Por favor, intenta nuevamente.');
      }
    } finally {
      setLoading(false);
      console.log("Proceso de registro finalizado");
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
