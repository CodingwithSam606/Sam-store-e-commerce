import { useState, useEffect } from "react";

export default function Hero() {
    const images = [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
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
        <section className="relative h-[480px] sm:h-[550px] lg:h-[620px] overflow-hidden">
            <div
                className="absolute inset-0 transition-transform duration-1000"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})`, left: `${index * 100}%` }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

            <div className="relative z-10 max-w-4xl mx-auto h-full flex items-center px-6">
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Shop Smarter,<br />Live Better
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 max-w-md mb-8">
                        Discover premium products with unbeatable quality and prices.
                    </p>
                    <a
                        href="#products"
                        className="inline-block bg-white text-black px-8 sm:px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 active:scale-95 transition-all"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
}