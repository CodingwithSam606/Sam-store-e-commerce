import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4">SamStore</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Your one-stop shop for modern, high-quality products at the best prices.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-lg">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            <Link to="/#hero" className="hover:text-white transition-colors">Home</Link>
                            <Link to="/#products" className="hover:text-white transition-colors">Shop</Link>
                            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-5 text-lg">Get In Touch</h4>
                        <p className="text-gray-400">Email: support@samstore.com</p>
                        <p className="text-gray-400">Phone: +234 000 000 0000</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    © 2026 SamStore. All rights reserved. Built with ❤️ by CodingwithSam
                </div>
            </div>
        </footer>
    );
}