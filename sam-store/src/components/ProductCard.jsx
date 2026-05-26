export default function ProductCard({ product, addToCart, openModal }) {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => openModal(product)}
                    className="w-full aspect-[4/3] object-cover cursor-pointer transition-transform group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-white/90 text-xs px-3 py-1 rounded-full font-medium capitalize shadow">
                    {product.category}
                </span>
            </div>

            <div className="p-4 sm:p-5">
                <h3
                    onClick={() => openModal(product)}
                    className="font-semibold text-base sm:text-lg line-clamp-2 cursor-pointer hover:text-blue-600 min-h-[2.8em]"
                >
                    {product.title}
                </h3>

                <p className="text-xl sm:text-2xl font-bold text-green-600 mt-3">
                    ${product.price}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-black text-white py-3.5 rounded-2xl font-medium hover:bg-gray-800 active:scale-95 transition-all text-sm sm:text-base"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={() => openModal(product)}
                        className="flex-1 border border-gray-300 py-3.5 rounded-2xl font-medium hover:bg-gray-50 transition-all text-sm sm:text-base"
                    >
                        Quick View
                    </button>
                </div>
            </div>
        </div>
    );
}