import { Link } from "react-router-dom"; // Make sure Link is imported

export default function Navbar({ cartCount, search, setSearch, openCart }) {

    return (
        <nav className="navbar">

            {/* Changed to Link so clicking logo goes home */}
            <Link to="/" className="logo">SamStore</Link>

            <input
                className="search"
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="nav-links">
                {/* Use Link to="/#hero" so it works from other pages */}
                <Link to="/#hero">Home</Link>

                {/* Use Link to="/#products" */}
                <Link to="/#products">Products</Link>

                {/* NEW: Contact Link */}
                <Link to="/contact">Contact</Link>
            </div>

            <div className="cart" onClick={openCart}>
                🛒 {cartCount}
            </div>

        </nav>
    );
}