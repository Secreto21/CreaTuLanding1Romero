import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../logo.svg';
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
            <Link to="/categoria/laptops" className="dropdown-link">Laptops</Link>
            <Link to="/categoria/smartphones" className="dropdown-link">Smartphones</Link>
            <Link to="/categoria/tablets" className="dropdown-link">Tablets</Link>
            <Link to="/categoria/accesorios" className="dropdown-link">Accesorios</Link>
          </div>
        </div>
        
        <Link to="/productos" className="nav-link">Todos los Productos</Link>
      </div>
      
      <CartWidget />
    </nav>
  );
};

export default NavBar;
