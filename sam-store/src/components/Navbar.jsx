import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount, search, setSearch, openCart }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="text-2xl sm:text-3xl font-bold">SamStore</Link>

                    {/* Search - Hidden on very small screens */}
                    <div className="hidden sm:block flex-1 max-w-md mx-6">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 py-2.5 bg-gray-100 rounded-2xl focus:outline-none focus:border-black text-sm"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={openCart}
                            className="relative p-2"
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="sm:hidden p-2"
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="sm:hidden mt-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-2.5 bg-gray-100 rounded-2xl focus:outline-none focus:border-black"
                    />
                </div>

                {/* Mobile Menu Links */}
                {menuOpen && (
                    <div className="sm:hidden mt-4 flex flex-col gap-4 text-lg font-medium border-t pt-4">
                        <Link to="/#hero" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/#products" onClick={() => setMenuOpen(false)}>Shop</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}