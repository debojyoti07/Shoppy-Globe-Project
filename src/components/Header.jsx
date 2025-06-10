// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShoppyGlobe
        </Link>
        <nav className="space-x-6 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/checkout" className="hover:text-blue-500">Checkout</Link>
          <Link to="/cart" className="relative inline-flex items-center hover:text-blue-500">
            <ShoppingCart className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
