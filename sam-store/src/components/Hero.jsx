import { useState, useEffect } from "react";

export default function Hero() {

    const images = [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);

    }, []);

    return (

        <section id="hero" className="hero">

            <div
                className="hero-slider"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >

                {images.map((img, index) => (
                    <div
                        key={index}
                        className="hero-slide"
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}

            </div>

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <h1>Welcome to SamStore</h1>

                <p>Discover amazing products at the best prices</p>

                <button className="shop-btn">
                    Shop Now
                </button>

            </div>

        </section>

    );
}