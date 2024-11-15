// src/views/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="section is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
      <div className="box has-text-centered p-6">
        <h1 className="title is-1 has-text-danger">404</h1>
        <p className="subtitle is-4">La página que buscas no existe.</p>
        <p>
          <a href="/" className="button is-primary is-medium is-rounded mt-4">
            Volver al inicio
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
