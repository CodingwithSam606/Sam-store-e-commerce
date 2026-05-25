import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Optional: Run `npm install lucide-react`

export default function Navbar({ cartCount, search, setSearch, openCart }) {
    return (
        <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-3xl font-bold tracking-tight text-black hover:text-gray-700 transition-colors">
                    SamStore
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-xl mx-8">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-5 py-3 bg-gray-100 border border-gray-200 rounded-2xl focus:outline-none focus:border-black focus:bg-white transition-all text-sm"
                    />
                </div>

                {/* Nav Links + Cart */}
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link to="/#hero" className="hover:text-black transition-colors">Home</Link>
                        <Link to="/#products" className="hover:text-black transition-colors">Shop</Link>
                        <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
                    </div>

                    {/* Cart Button */}
                    <div
                        onClick={openCart}
                        className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors relative"
                    >
                        <ShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}