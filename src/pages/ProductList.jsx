// src/pages/ProductList.jsx
import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import { useState } from "react";
import Hero from "../components/Hero";

function ProductList() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          🛒 Explore Our Products
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md mx-auto block mb-8 px-4 py-2 border rounded shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading && (
          <div className="text-center text-gray-500">Loading products...</div>
        )}

        {error && (
          <div className="text-center text-red-500">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default ProductList;
