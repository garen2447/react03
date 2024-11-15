// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Importa el archivo CSS para los estilos personalizados


const Header = ({ children }) => {
  return (
    <div>
      {/* Header común para todas las páginas */}
      <header className="navbar is-primary">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Mi App</Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {/* Usamos solo 'has-text-white' en el hover para los enlaces */}
            <Link to="/dashboard" className="navbar-item has-text-white-on-hover">Dashboard</Link>
            <Link to="/login" className="navbar-item has-text-white-on-hover">Login</Link>
            <Link to="/register" className="navbar-item has-text-white-on-hover">Register</Link>
          </div>
        </div>
      </header>

      {/* Aquí es donde se renderizan las rutas (contenido de la página) */}
      <main className="section">
        {children}  {/* Renderizamos el contenido de la página actual aquí */}
      </main>
    </div>
  );
};

export default Header;
