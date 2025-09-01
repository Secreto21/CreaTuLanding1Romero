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
      <img src={producto.imagen} alt={producto.nombre} className="item-imagen" />
      <div className="item-info">
        <h3 className="item-nombre">{producto.nombre}</h3>
        <p className="item-precio">{formatearPrecio(producto.precio)}</p>
        <p className="item-stock">Stock: {producto.stock}</p>
        <Link to={`/item/${producto.id}`} className="item-detalle-link">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
