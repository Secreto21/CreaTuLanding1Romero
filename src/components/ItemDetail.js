import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

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
    addItem(producto, cantidad);
    setAgregado(true);
  };

  const terminarCompra = () => {
    navigate('/cart');
  };

  if (!producto) {
    return <div className="producto-no-encontrado">Producto no encontrado</div>;
  }

  return (
    <div className="item-detail">
      <div className="item-detail-imagen">
        <img src={producto.pictureUrl} alt={producto.title} />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-nombre">{producto.title}</h2>
        <p className="item-detail-descripcion">{producto.description}</p>
        <p className="item-detail-precio">{formatearPrecio(producto.price)}</p>
        <p className="item-detail-stock">Stock disponible: {producto.stock} unidades</p>
        
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
          {!agregado ? (
            <button 
              onClick={onAdd}
              className="btn-agregar-carrito"
              disabled={producto.stock === 0}
            >
              {producto.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
            </button>
          ) : (
            <div className="botones-finalizacion">
              <button onClick={terminarCompra} className="btn-terminar-compra">
                Terminar compra
              </button>
              <button onClick={() => navigate('/')} className="btn-seguir-comprando">
                Seguir comprando
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
