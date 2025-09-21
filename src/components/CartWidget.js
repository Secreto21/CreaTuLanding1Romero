import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  return quantity > 0 ? (
    <Link to="/cart" className="cart-widget">
      <span role="img" aria-label="carrito">🛒</span>
      <span className="cart-quantity">{quantity}</span>
    </Link>
  ) : null;
};

export default CartWidget;