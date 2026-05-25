export default function ProductModal({ product, closeModal, addToCart }) {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div
                className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
                    >
                        ✕
                    </button>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-96 object-cover"
                    />
                </div>

                <div className="p-8">
                    <span className="inline-block bg-gray-100 text-sm px-4 py-1 rounded-full capitalize mb-3">
                        {product.category}
                    </span>

                    <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-bold text-green-600">
                            ${product.price}
                        </h3>
                        <button
                            onClick={() => { addToCart(product); closeModal(); }}
                            className="bg-black text-white px-10 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}