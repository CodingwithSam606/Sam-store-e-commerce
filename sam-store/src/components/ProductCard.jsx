export default function ProductCard({ product, addToCart, openModal }) {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 active:scale-[0.98]">

            {/* Image Container */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => openModal(product)}
                    className="w-full aspect-square object-cover cursor-pointer transition-transform group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-xs px-3 py-1 rounded-full font-medium capitalize shadow-sm">
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
                <h3
                    onClick={() => openModal(product)}
                    className="font-semibold text-base sm:text-lg leading-tight line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors min-h-[2.8em]"
                >
                    {product.title}
                </h3>

                <p className="text-xl sm:text-2xl font-bold text-green-600 mt-3">
                    ${product.price}
                </p>

                {/* Buttons - Stacked on mobile, side by side on larger screens */}
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                    <button
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-black hover:bg-gray-800 text-white py-3.5 rounded-2xl font-medium transition-all active:scale-95 text-sm sm:text-base"
                    >
                        Add to Cart
                    </button>
                    <button
                        onClick={() => openModal(product)}
                        className="flex-1 border border-gray-300 hover:bg-gray-50 py-3.5 rounded-2xl font-medium transition-all text-sm sm:text-base"
                    >
                        Quick View
                    </button>
                </div>
            </div>
        </div>
    );
}