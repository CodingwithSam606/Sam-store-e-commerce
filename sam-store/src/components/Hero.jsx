import { useState, useEffect } from "react";

export default function Hero() {
    const images = [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[500px] md:h-[600px] overflow-hidden">
            {/* Slider */}
            <div className="flex h-full transition-transform duration-1000 ease-out will-change-transform"
                style={{ transform: `translateX(-${current * 100}%)` }}>

                {images.map((img, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img})`, left: `${index * 100}%` }}
                    />
                ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 z-10 max-w-4xl mx-auto h-full flex items-center px-6">
                <div className="max-w-xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                        Shop Smarter, Live Better
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Discover premium products with unbeatable prices and quality.
                    </p>

                    <a
                        href="#products"
                        className="inline-block bg-white text-black px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 active:scale-95 transition-all"
                    >
                        Shop Now
                    </a>
                </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${current === index ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}