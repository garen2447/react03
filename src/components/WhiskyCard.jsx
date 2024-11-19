import React from 'react';

const WhiskyCard = ({ whisky }) => {
  return (
    <div className="card has-background-light shadow-sm" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Imagen de la tarjeta */}
      <div className="card-image" style={{ marginTop: '10px' }}> 
        <figure className="image" style={{ width: '100px', height: '133px', margin: '0 auto' }}>
          <img src={whisky.foto} alt={whisky.nombre} style={{ objectFit: 'cover' }} />
        </figure>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="card-content" style={{ flex: '1' }}>
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{whisky.nombre}</p>
            <p className="subtitle is-6">{whisky.marca}</p>
          </div>
        </div>

        <div className="content">
          <p><strong>Año:</strong> {whisky.año}</p>
          <p><strong>Precio:</strong> {whisky.precio}</p>
          <p><strong>Descripción:</strong> {whisky.descripcion}</p>
        </div>
      </div>

      {/* Pie de la tarjeta con los botones */}
      <footer className="card-footer">
        <div className="columns is-gapless">
          {/* Botón Detalles */}
          <div className="column is-half">
            <a href="#" className="card-footer-item">
              <button className="button is-info is-fullwidth">
                Detalles
              </button>
            </a>
          </div>

          {/* Botón Comprar */}
          <div className="column is-half">
            <a href="#" className="card-footer-item">
              <button className="button is-success is-fullwidth">
                Comprar
              </button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WhiskyCard;
