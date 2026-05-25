import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCart, removeFromCartAPI } from "../services/api";

export default function Checkout({ clearCart }) {
    const navigate = useNavigate();
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

    const handlePlaceOrder = () => {
        clearCart();
        setCart([]);
        alert("🎉 Order Placed Successfully! Thank you for shopping at SamStore.");
        navigate("/");
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Loading checkout...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
                    <Link
                        to="/"
                        className="text-black hover:text-gray-600 font-medium flex items-center gap-2"
                    >
                        ← Continue Shopping
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-semibold mb-6">Your Items</h2>

                        {cart.length === 0 ? (
                            <div className="bg-white p-12 rounded-3xl text-center">
                                <p className="text-6xl mb-4">🛒</p>
                                <h3 className="text-2xl font-medium mb-2">Your cart is empty</h3>
                                <p className="text-gray-600">You have successfully placed your order.</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {cart.map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-3xl flex gap-6 shadow-sm">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-28 h-28 object-cover rounded-2xl"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                            <p className="text-2xl font-bold text-green-600">
                                                ${item.price}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="text-red-500 hover:text-red-700 self-start mt-1"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-8">
                            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="text-green-600">FREE</span>
                                </div>
                                <div className="border-t pt-4 flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                disabled={cart.length === 0}
                                className="w-full bg-black text-white py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Place Order
                            </button>

                            <p className="text-center text-sm text-gray-500 mt-6">
                                Secure checkout powered by SamStore
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}