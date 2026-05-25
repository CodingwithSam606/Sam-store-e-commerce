import { Link } from "react-router-dom";
import { X } from "lucide-react"; // Optional: Install lucide-react for icons (`npm install lucide-react`)

export default function CartSidebar({ cart, isOpen, closeCart, removeFromCart }) {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                    onClick={closeCart}
                />
            )}

            {/* Cart Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl 
                transform transition-transform duration-300 ease-in-out z-50
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
                    <button
                        onClick={closeCart}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="text-6xl mb-4">🛒</div>
                            <p className="text-gray-500 text-lg">Your cart is empty</p>
                            <p className="text-gray-400 text-sm mt-2">Start adding some products!</p>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-4 bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition-colors"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-xl"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-800 line-clamp-2">{item.title}</p>
                                    <strong className="text-lg text-green-600 mt-1 block">
                                        ${item.price}
                                    </strong>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 self-start mt-1 transition-colors"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer (Total + Checkout) */}
                {cart.length > 0 && (
                    <div className="border-t p-6 bg-white">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-600 text-lg">Total</span>
                            <strong className="text-2xl font-semibold">
                                ${totalPrice.toFixed(2)}
                            </strong>
                        </div>

                        <Link
                            to="/checkout"
                            onClick={closeCart}
                            className="block w-full bg-black hover:bg-gray-800 text-white text-center py-4 rounded-2xl font-medium transition-all active:scale-95"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}