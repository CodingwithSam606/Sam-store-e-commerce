import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

export default function Home({ addToCart, search }) {

    return (
        <div>

            <Hero />

            <ProductGrid
                addToCart={addToCart}
                search={search}
            />

        </div>
    );

}