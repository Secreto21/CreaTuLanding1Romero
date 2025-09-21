import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onRemove }) => {
    const { title, price, quantity, pictureUrl } = item;
    
    return (
        <div className="cart-item">
            <img src={pictureUrl} alt={title} className="cart-item-image" />
            <div className="cart-item-details">
                <h3>{title}</h3>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${price * quantity}</p>
                <button onClick={() => onRemove(item.id)} className="remove-button">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CartItem;