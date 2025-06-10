// src/components/Hero.jsx
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-400 to-indigo-600 text-white py-16 px-6 text-center rounded-b-3xl shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse">
          Welcome to ShoppyGlobe 🌍
        </h1>
        <p className="text-lg mb-8 text-blue-100">
          Discover the hottest deals, exclusive products & global style — all in one place.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition transform"
        >
          🛍️ Start Shopping
        </Link>
      </div>
    </section>
  );
}

export default Hero;
