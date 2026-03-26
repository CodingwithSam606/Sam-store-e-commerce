export default function ProductCard({ product, addToCart, openModal }) {

    return (
        <div className="product-card">

            <img
                src={product.image}
                alt={product.title}
                onClick={() => openModal(product)}
            />

            <h3>{product.title}</h3>

            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>

        </div>
    );
}