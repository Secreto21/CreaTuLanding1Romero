import React from 'react';
import CartWidget from './CartWidget';
import logo from '../logo.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo Tienda" style={{height: 40}} />
      <a href="/">Inicio</a>
      <a href="/productos">Productos</a>
      <a href="/contacto">Contacto</a>
      <CartWidget />
    </nav>
  );
};

export default NavBar;