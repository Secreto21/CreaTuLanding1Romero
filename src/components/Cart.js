import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>El carrito está vacío</h2>
                <Link to="/" className="continue-shopping">
                    Ir a comprar
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            <div className="cart-items">
                {cart.map(item => (
                    <CartItem 
                        key={item.id} 
                        item={item} 
                        onRemove={removeItem}
                    />
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ${getTotal()}</h3>
                <div className="cart-actions">
                    <button onClick={clearCart} className="clear-cart">
                        Vaciar Carrito
                    </button>
                    <Link to="/checkout" className="checkout">
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;