import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="ItemListContainer">
      <h2>{mensaje}</h2>
      {/* Aquí irá el catálogo de productos */}
    </div>
  );
};

export default ItemListContainer;