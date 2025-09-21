import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(precio);
  };

  return (
    <div className="item">
      <img src={producto.pictureUrl} alt={producto.title} className="item-imagen" />
      <div className="item-info">
        <h3 className="item-nombre">{producto.title}</h3>
        <p className="item-precio">{formatearPrecio(producto.price)}</p>
        <p className="item-stock">Stock disponible: {producto.stock} unidades</p>
        <Link to={`/item/${producto.id}`} className="item-detalle-link">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
