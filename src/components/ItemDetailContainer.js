import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductoPorId } from '../data/mockData';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProducto = async () => {
      try {
        const productoData = await getProductoPorId(id);
        setProducto(productoData);
      } catch (error) {
        console.error('Error al cargar producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <div className="loading">Cargando producto...</div>
      ) : producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <div className="producto-no-encontrado">
          <h2>Producto no encontrado</h2>
          <p>El producto que buscas no existe o no está disponible.</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
