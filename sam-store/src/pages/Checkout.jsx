import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate
import { getCart, removeFromCartAPI } from "../services/api";

export default function Checkout({ clearCart }) {
    const navigate = useNavigate(); // 2. Initialize the navigate hook
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCart().then(data => {
            setCart(data);
            setLoading(false);
        });
    }, []);

    const handleRemove = (id) => {
        removeFromCartAPI(id).then(() => {
            setCart(prev => prev.filter(item => item.id !== id));
        });
    };

    // 3. Updated function to clear cart AND redirect
    const handlePlaceOrder = () => {
        clearCart(); // Clear the cart globally (App.jsx)
        setCart([]); // Clear local state
        alert("Order Placed Successfully! 🎉");
        navigate("/"); // 4. Redirect back to Home (Hero section)
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    if (loading) return <div className="loading">Loading checkout...</div>;

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <h1>Checkout</h1>
                <Link to="/" className="back-btn">← Continue Shopping</Link>
            </div>

            <div className="checkout-container">
                <div className="checkout-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart-message">
                            <h3>Your cart is empty</h3>
                            <p>You have successfully placed your order.</p>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="checkout-card">
                                <img src={item.image} alt={item.title} />
                                <div className="checkout-info">
                                    <h3>{item.title}</h3>
                                    <p>${item.price}</p>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="checkout-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <button
                        className="pay-btn"
                        onClick={handlePlaceOrder}
                        disabled={cart.length === 0}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}