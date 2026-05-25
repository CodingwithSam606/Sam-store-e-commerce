import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { getProducts } from "../services/api";

export default function ProductGrid({ addToCart, search }) {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    const filteredProducts = products
        .filter((product) =>
            product.title.toLowerCase().includes((search || "").toLowerCase())
        )
        .filter((product) =>
            category === "all" ? true : product.category === category
        );

    function openModal(product) {
        setSelectedProduct(product);
    }

    function closeModal() {
        setSelectedProduct(null);
    }

    // Helper function to get display name
    const getCategoryName = (cat) => {
        if (cat === "all") return "All Products";
        if (cat === "men's clothing") return "Men";
        if (cat === "women's clothing") return "Women";
        if (cat === "electronics") return "Electronics";
        if (cat === "children's clothing") return "Children";
        return cat;
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-10">
                {["all", "men's clothing", "women's clothing", "electronics", "children's clothing"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-6 py-2.5 rounded-2xl font-medium transition-all ${category === cat
                                ? 'bg-black text-white shadow-md'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }`}
                    >
                        {getCategoryName(cat)}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        openModal={openModal}
                    />
                ))}
            </div>

            {/* Modal */}
            <ProductModal
                product={selectedProduct}
                closeModal={closeModal}
                addToCart={addToCart}
            />
        </div>
    );
}