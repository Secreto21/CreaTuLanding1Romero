import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <main>
          <Routes>
            <Route 
              path="/" 
              element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />} 
            />
            <Route 
              path="/productos" 
              element={<ItemListContainer mensaje="Catálogo de Productos" />} 
            />
            <Route 
              path="/categoria/:categoria" 
              element={<ItemListContainer />} 
            />
            <Route 
              path="/item/:id" 
              element={<ItemDetailContainer />} 
            />
            <Route 
              path="/cart" 
              element={<Cart />} 
            />
            <Route 
              path="/checkout" 
              element={<CheckoutForm />} 
            />
            <Route 
              path="*" 
              element={
                <div className="not-found">
                  <h2>Página no encontrada</h2>
                  <p>La página que buscas no existe.</p>
                </div>
              } 
            />
          </Routes>
        </main>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
