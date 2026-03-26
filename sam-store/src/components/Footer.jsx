import { Link } from "react-router-dom"; // Make sure Link is imported

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>SamStore</h3>
                <p>Your one-stop shop for modern products.</p>

                <div className="footer-links">
                    {/* Updated paths to include /#hero and /#products */}
                    <Link to="/#hero">Home</Link>
                    <Link to="/#products">Products</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <p className="copyright">
                    © 2026 SamStore. All rights reserved.
                </p>
            </div>
        </footer>
    );
}