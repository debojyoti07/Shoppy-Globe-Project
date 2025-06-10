// src/components/CartItem.jsx
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* 🖼️ Product Image + Title */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h2 className="font-semibold text-base">{item.title}</h2>
          {/* ✅ Converted to INR with no decimals */}
          <p className="text-gray-600 text-sm">
            ₹{Math.floor(item.price * 80)} × {item.quantity}
          </p>
          <p className="text-blue-700 font-semibold text-sm">
            Total: ₹{Math.floor(item.price * item.quantity * 80)}
          </p>
        </div>
      </div>

      {/* 🔢 Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
        >
          −
        </button>
        <span className="min-w-[32px] text-center text-base font-medium">
          {item.quantity}
        </span>
        <button
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
        >
          +
        </button>
      </div>

      {/* ❌ Remove Button */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-600 hover:underline text-sm"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
