import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../logo.svg';
import { categorias } from '../data/mockData';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Logo Tienda" className="navbar-logo" />
        </Link>
        <Link to="/" className="brand-name">Mi Tienda</Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/" className="nav-link">Inicio</Link>
        
        <div className="dropdown">
          <span className="nav-link dropdown-toggle">Categorías</span>
          <div className="dropdown-content">
            {categorias.map((cat) => (
              <Link 
                key={cat.id} 
                to={`/categoria/${cat.id}`} 
                className="dropdown-link"
              >
                {cat.nombre}
              </Link>
            ))}
          </div>
        </div>
        
        <Link to="/productos" className="nav-link">Todos los Productos</Link>
      </div>
      
      <CartWidget />
    </nav>
  );
};

export default NavBar;
