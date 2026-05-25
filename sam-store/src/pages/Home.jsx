import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

export default function Home({ addToCart, search }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Hero />

            {/* Products Section */}
            <div id="products" className="pt-8 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3">
                            Our Products
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Discover our carefully selected collection
                        </p>
                    </div>

                    <ProductGrid
                        addToCart={addToCart}
                        search={search}
                    />
                </div>
            </div>
        </div>
    );
}