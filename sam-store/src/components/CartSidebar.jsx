import { Link } from "react-router-dom";
import { X, ShoppingCart } from "lucide-react";

export default function CartSidebar({ cart, isOpen, closeCart, removeFromCart }) {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0, 0);

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40"
                    onClick={closeCart}
                />
            )}

            {/* Cart Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl 
                transform transition-transform duration-300 ease-in-out z-50
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
                    <div className="flex items-center gap-3">
                        <ShoppingCart size={24} />
                        <h2 className="text-2xl font-semibold">Your Cart ({cart.length})</h2>
                    </div>
                    <button
                        onClick={closeCart}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={28} />
                    </button>
                </div>

                {/* Scrollable Items Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[calc(100vh-180px)]">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-20">
                            <div className="text-6xl mb-6">🛒</div>
                            <p className="text-xl font-medium text-gray-600">Your cart is empty</p>
                            <p className="text-gray-500 mt-2">Start adding some amazing products!</p>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-4 bg-gray-50 p-4 rounded-2xl"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium leading-tight line-clamp-2">{item.title}</p>
                                    <strong className="text-lg text-green-600 mt-1 block">
                                        ${item.price}
                                    </strong>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 self-start mt-1 text-sm font-medium"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer - Always visible */}
                {cart.length > 0 && (
                    <div className="border-t p-6 bg-white sticky bottom-0">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-600 text-lg">Total</span>
                            <strong className="text-3xl font-semibold">
                                ${totalPrice.toFixed(2)}
                            </strong>
                        </div>

                        <Link
                            to="/checkout"
                            onClick={closeCart}
                            className="block w-full bg-black hover:bg-gray-800 text-white text-center py-4 rounded-2xl font-semibold text-lg transition-all active:scale-[0.98]"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}