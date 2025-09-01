import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProductos, getProductosPorCategoria } from '../data/mockData';
import './ItemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProductos = async () => {
      try {
        let productosData;
        if (categoria) {
          productosData = await getProductosPorCategoria(categoria);
        } else {
          productosData = await getProductos();
        }
        setProductos(productosData);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoria]);

  const obtenerTitulo = () => {
    if (categoria) {
      const categoriaNombre = categoria.charAt(0).toUpperCase() + categoria.slice(1);
      return `Productos de ${categoriaNombre}`;
    }
    return mensaje || 'Catálogo de Productos';
  };

  return (
    <div className="ItemListContainer">
      <h2>{obtenerTitulo()}</h2>
      {loading ? (
        <div className="loading">Cargando productos...</div>
      ) : productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <div className="no-productos">No se encontraron productos en esta categoría</div>
      )}
    </div>
  );
};

export default ItemListContainer;
