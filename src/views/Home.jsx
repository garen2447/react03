import React, { useState, useEffect } from 'react';
import WhiskyCard from '../components/WhiskyCard';
import '../App.css';
import { fetchWhiskys } from '../components/whiskydata';
import db from "../config/firebase.js"
import { AppRouter } from '../router/Router.jsx';

function Home() {
  const [whiskys, setWhiskys] = useState([]); // Estado para almacenar los whiskys
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const [error, setError] = useState(null); // Estado para errores, si los hubiera

  const dataBase = db
  console.log(dataBase)

  // Simulamos un "fetch" de los whiskys
  useEffect(() => {
    const getWhiskys = async () => {
      try {
        const data = await fetchWhiskys(); // Realizamos el "fetch" de whiskys
        setWhiskys(data); // Actualizamos el estado con los datos obtenidos
      } catch (err) {
        setError("Error al cargar los whiskys"); // Si hay un error, lo guardamos en el estado
      } finally {
        setLoading(false); // Independientemente de si el fetch es exitoso o falla, cambiamos el estado de loading
      }
    };

    getWhiskys(); // Ejecutamos la función para obtener los whiskys
  }, []); // El array vacío asegura que se ejecute solo una vez al cargar el componente

  return (
    <div className="App">
      <h1>Lista de Whiskys</h1>

      {loading && <p>Cargando...</p>} {/* Mensaje mientras se carga */}
      {error && <p>{error}</p>} {/* Mensaje de error si ocurre algún problema */}
      
      <div className="whisky-list">
        {/* Solo mostramos las cartas de los whiskys si no hay errores y ya se terminó de cargar */}
        {!loading && !error && whiskys.map((whisky) => (
          <WhiskyCard key={whisky.id} whisky={whisky} />
        ))}
      </div>
    </div>
  );
}

export { Home } ;