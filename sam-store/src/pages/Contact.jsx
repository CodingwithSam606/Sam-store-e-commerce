import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
                <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-sm text-center">
                    <div className="text-6xl mb-6">🎉</div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Your message has been received. We will get back to you shortly.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-black text-white px-8 py-3.5 rounded-2xl font-medium hover:bg-gray-800 transition-all"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-2xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                    <p className="text-gray-600 text-lg">
                        Have a question or feedback? We'd love to hear from you.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-sm p-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-all"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-all"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-black transition-all resize-y"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all active:scale-95"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}