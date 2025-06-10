// src/pages/Checkout.jsx
import { useSelector } from "react-redux";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">💳 Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Please add items before checking out.</p>
      ) : (
        <div className="space-y-6">
          {/* 🧾 Order Summary */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between text-sm">
                  <span>{item.title} × {item.quantity}</span>
                  <span>₹{Math.floor(item.price * 80 * item.quantity)}</span>
                </li>
              ))}
            </ul>
            <hr className="my-4" />
            <p className="text-lg font-bold">
              Total: ₹{Math.floor(total * 80)}
            </p>
          </div>

          {/* 💳 Payment Details */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <p className="text-gray-500 italic">This is a placeholder — payment integration coming soon.</p>
            <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
