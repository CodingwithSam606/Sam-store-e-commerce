import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";

import { getCart, addToCartAPI, removeFromCartAPI, clearCartAPI } from "./services/api";

function App() {
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [cartOpen, setCartOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        const data = await getCart();
        setCart(data);
    };

    const addToCart = (product) => {
        addToCartAPI(product).then(() => {
            fetchCart();
            setMessage("✅ Product added to cart successfully!");
            setTimeout(() => setMessage(""), 2500);
        });
    };

    const removeFromCart = (id) => {
        removeFromCartAPI(id).then(() => {
            fetchCart();
        });
    };

    const clearCart = async () => {
        await clearCartAPI();
        setCart([]);
    };

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    return (
        <>
            <Navbar
                cartCount={cart.length}
                search={search}
                setSearch={setSearch}
                openCart={openCart}
            />

            <Routes>
                <Route path="/" element={<Home addToCart={addToCart} search={search} />} />
                <Route path="/checkout" element={<Checkout clearCart={clearCart} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />

            <CartSidebar
                cart={cart}
                isOpen={cartOpen}
                closeCart={closeCart}
                removeFromCart={removeFromCart}
            />

            {/* Modern Toast Message */}
            {message && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 z-50">
                    {message}
                </div>
            )}
        </>
    );
}

export default App;