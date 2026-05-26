import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount, search, setSearch, openCart }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tight">
                        SamStore
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 text-base font-medium">
                        <Link to="/#hero" className="hover:text-black transition-colors">Home</Link>
                        <Link to="/#products" className="hover:text-black transition-colors">Shop</Link>
                        <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
                    </div>

                    {/* Search Bar - Visible on tablet and above */}
                    <div className="hidden sm:flex flex-1 max-w-md mx-6">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-5 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:outline-none focus:border-black focus:bg-white text-sm"
                        />
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4">
                        {/* Cart Icon */}
                        <button
                            onClick={openCart}
                            className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors"
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="sm:hidden mt-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-5 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:outline-none focus:border-black"
                    />
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 text-base font-medium border-t pt-4">
                        <Link to="/#hero" onClick={() => setMenuOpen(false)} className="py-2">Home</Link>
                        <Link to="/#products" onClick={() => setMenuOpen(false)} className="py-2">Shop</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)} className="py-2">Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}