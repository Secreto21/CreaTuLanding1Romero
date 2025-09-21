import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import ItemList from './ItemList';
import Loading from './Loading';
import './ItemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, 'productos');
        let q;
        
        if (categoria) {
          q = query(productosRef, where('category', '==', categoria));
        } else {
          q = productosRef;
        }
        
        const querySnapshot = await getDocs(q);
        const productosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Categoría buscada:', categoria);
        console.log('Productos encontrados:', productosData);
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
        <Loading message="Cargando productos..." />
      ) : productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <div className="no-productos">No se encontraron productos en esta categoría</div>
      )}
    </div>
  );
};

export default ItemListContainer;
