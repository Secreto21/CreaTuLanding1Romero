import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useCart } from '../context/CartContext';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const [buyerData, setBuyerData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const { cart, getTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setBuyerData({
            ...buyerData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const order = {
                buyer: buyerData,
                items: cart.map(item => ({
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    price: item.price
                })),
                total: getTotal(),
                date: new Date().toISOString()
            };

            const docRef = await addDoc(collection(db, 'orders'), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al procesar la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Procesando su orden...</div>;
    }

    if (orderId) {
        return (
            <div className="success-message">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: {orderId}</p>
                <button onClick={() => navigate('/')} className="back-to-shop">
                    Volver a la tienda
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={buyerData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={buyerData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={buyerData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="order-summary">
                    <h3>Resumen de la Orden</h3>
                    <p>Total: ${getTotal()}</p>
                </div>
                <button type="submit" className="submit-order">
                    Confirmar Orden
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;