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

    return (
        <>

            <div id="products" className="filters">
                <button onClick={() => setCategory("all")}>All</button>
                <button onClick={() => setCategory("men's clothing")}>Men</button>
                <button onClick={() => setCategory("women's clothing")}>Women</button>
                <button onClick={() => setCategory("electronics")}>Electronics</button>
                {/* NEW BUTTON ADDED BELOW */}
                <button onClick={() => setCategory("children's clothing")}>Children</button>
            </div>

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        openModal={openModal}
                    />
                ))}
            </div>

            <ProductModal
                product={selectedProduct}
                closeModal={closeModal}
                addToCart={addToCart}
            />

        </>
    );
}