export default function ProductModal({ product, closeModal, addToCart }) {

    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            {/* onClick on overlay closes modal if clicked outside */}

            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {/* onClick stops click from closing modal when inside */}

                <button className="close-btn" onClick={closeModal}>X</button>

                <img src={product.image} alt={product.title} />

                <h2>{product.title}</h2>

                {/* Added Category Tag */}
                <span className="modal-category">{product.category}</span>

                {/* Improved Description Styling */}
                <p className="modal-description">{product.description}</p>

                <div className="modal-footer">
                    <h3>${product.price}</h3>
                    <button onClick={() => { addToCart(product); closeModal(); }}>
                        Add to Cart
                    </button>
                </div>

            </div>

        </div>
    );
}