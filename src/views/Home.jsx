import React, { useState, useEffect } from 'react';
import WhiskyCard from '../components/WhiskyCard';
import { fetchWhiskys } from '../components/whiskydata';
import Header from '../components/Header';

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
        setError("Hubo un problema al cargar los whiskys. Por favor, inténtalo más tarde."); // Error más amigable
      } finally {
        setLoading(false); // Independientemente de si el fetch es exitoso o falla, cambiamos el estado de loading
      }
    };

    getWhiskys(); // Ejecutamos la función para obtener los whiskys
  }, []); 

  return (
    <div className="App">
      
      <Header />

      <h1 className="title is-3 has-text-centered mb-5">Lista de productos</h1>

      {loading && <p className="has-text-centered">Cargando...</p>} {/* Mensaje mientras se carga */}
      
      {/* Mostrar mensaje de error de manera atractiva con clases de Bulma */}
      {error && (
        <div className="notification is-danger is-light has-text-centered">
          <button className="delete" onClick={() => setError(null)}></button>
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Contenedor de las tarjetas de whisky */}
      <div className="container">
        <div className="columns is-multiline is-centered">
          {/* Solo mostramos las cartas de los whiskys si no hay errores y ya se terminó de cargar */}
          {!loading && !error && whiskys.length === 0 && (
            <div className="notification is-warning is-light has-text-centered">
              <strong>¡Vaya!</strong> No se encontraron whiskys en la base de datos.
            </div>
          )}
          
          {/* Mostrar los whiskys */}
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
