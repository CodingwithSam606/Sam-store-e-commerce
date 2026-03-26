import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
// CHANGE 1: Import clearCartAPI here
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

    function addToCart(product) {
        addToCartAPI(product).then(() => {
            fetchCart();
            setMessage("Product added to cart successfully!");
            setTimeout(() => setMessage(""), 2000);
        });
    }

    function removeFromCart(id) {
        removeFromCartAPI(id).then(() => {
            fetchCart();
        });
    }

    // CHANGE 2: Add this new function to clear the cart
    const clearCart = async () => {
        await clearCartAPI();
        setCart([]); // Clear the local state
    };

    function openCart() {
        setCartOpen(true);
    }

    function closeCart() {
        setCartOpen(false);
    }

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
                {/* CHANGE 3: Pass clearCart to Checkout */}
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
            {message && <div className="message">{message}</div>}
        </>
    );
}

export default App;