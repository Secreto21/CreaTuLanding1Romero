import React, { useState } from 'react';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);

  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(precio);
  };

  const manejarCambioCantidad = (nuevaCantidad) => {
    if (nuevaCantidad >= 1 && nuevaCantidad <= producto.stock) {
      setCantidad(nuevaCantidad);
    }
  };

  const onAdd = () => {
    console.log(`Agregando ${cantidad} unidad(es) del producto: ${producto.nombre}`);
    // Aquí se implementará la lógica del carrito en futuras entregas
    alert(`Se agregaron ${cantidad} unidad(es) de ${producto.nombre} al carrito`);
  };

  if (!producto) {
    return <div className="producto-no-encontrado">Producto no encontrado</div>;
  }

  return (
    <div className="item-detail">
      <div className="item-detail-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-nombre">{producto.nombre}</h2>
        <p className="item-detail-descripcion">{producto.descripcion}</p>
        <p className="item-detail-precio">{formatearPrecio(producto.precio)}</p>
        <p className="item-detail-stock">Stock disponible: {producto.stock}</p>
        
        <div className="item-count">
          <h4>Cantidad:</h4>
          <div className="cantidad-controls">
            <button 
              onClick={() => manejarCambioCantidad(cantidad - 1)}
              disabled={cantidad <= 1}
              className="btn-cantidad"
            >
              -
            </button>
            <span className="cantidad-display">{cantidad}</span>
            <button 
              onClick={() => manejarCambioCantidad(cantidad + 1)}
              disabled={cantidad >= producto.stock}
              className="btn-cantidad"
            >
              +
            </button>
          </div>
          <button 
            onClick={onAdd}
            className="btn-agregar-carrito"
            disabled={producto.stock === 0}
          >
            {producto.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
