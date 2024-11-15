// src/views/Home.jsx
import React, { useState, useEffect } from 'react';
import WhiskyCard from '../components/WhiskyCard';
import { fetchWhiskys } from '../components/whiskydata';
import Header from '../components/Header'; // Importa el Header

function Home() {
  const [whiskys, setWhiskys] = useState([]); // Estado para almacenar los whiskys
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const [error, setError] = useState(null); // Estado para errores, si los hubiera

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
      {/* Insertamos el Header en la parte superior */}
      <Header />

      <h1 className="title is-3 has-text-centered mb-5">Lista de productos</h1>

      {loading && <p className="has-text-centered">Cargando...</p>} {/* Mensaje mientras se carga */}
      {error && <p className="has-text-danger has-text-centered">{error}</p>} {/* Mensaje de error si ocurre algún problema */}

      {/* Contenedor de las tarjetas de whisky con más margen en los lados */}
      <div className="container">
        <div className="columns is-multiline is-centered">
          {/* Solo mostramos las cartas de los whiskys si no hay errores y ya se terminó de cargar */}
          {!loading && !error && whiskys.map((whisky) => (
            <div key={whisky.id} className="column is-12-mobile is-6-tablet is-3-desktop mb-5">
              <WhiskyCard whisky={whisky} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
