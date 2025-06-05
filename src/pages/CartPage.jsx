// src/components/Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cart/cartSlice";
import { Link } from "react-router-dom";
import CartImage from "../assets/cartImage.png";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // to show total quantity
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // if cart is empty then show this
  if (cartItems.length === 0) {
    return (
      <div className="p-10 flex flex-col items-center justify-center gap-4">
        <img src={CartImage} alt="" className="w-96 h-auto" />
        <h2 className="text-2xl mb-4">Your Shopping Bag is Empty!!</h2>
        <Link to="/" className="text-blue-600 underline">
          Go shopping
        </Link>
      </div>
    );
  }

  // to display items added in cart
  return (
    <div className="p-2 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="mt-4 flex justify-between items-center border-t pt-4">
        <h3 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-white px-2 py-1  rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
