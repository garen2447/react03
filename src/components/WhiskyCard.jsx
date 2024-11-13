// src/components/WhiskyCard.jsx

import React from 'react';

const WhiskyCard = ({ whisky }) => {
  return (
    <div className="whisky-card">
      <img src={whisky.foto} alt={whisky.nombre} className="whisky-image" />
      <h3>{whisky.nombre}</h3>
      <p><strong>Año:</strong> {whisky.año}</p>
      <p><strong>Marca:</strong> {whisky.marca}</p>
      <p><strong>Precio:</strong> {whisky.precio}</p>
      <p><strong>Descripción:</strong> {whisky.descripcion}</p>
    </div>
  );
};

export default WhiskyCard;
