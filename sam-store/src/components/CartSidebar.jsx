import { Link } from "react-router-dom"; // Import Link

export default function CartSidebar({ cart, isOpen, closeCart, removeFromCart }) {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>

            <div className="cart-header">
                <h2>Your Cart</h2>
                <button onClick={closeCart}>X</button>
            </div>

            <div className="cart-items-container">
                {cart.length === 0 ? (
                    <p className="empty">Cart is empty</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div>
                                <p>{item.title}</p>
                                <strong>${item.price}</strong>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* ADD TOTAL AND CHECKOUT BUTTON HERE */}
            {cart.length > 0 && (
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total:</span>
                        <strong>${totalPrice.toFixed(2)}</strong>
                    </div>
                    <Link to="/checkout" onClick={closeCart} className="checkout-btn">
                        Proceed to Checkout
                    </Link>
                </div>
            )}

        </div>
    );
}