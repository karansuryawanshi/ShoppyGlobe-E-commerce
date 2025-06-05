import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    // to display each item in cart
    <div className="flex flex-col items-center justify-between mb-4 p-4 bg-white rounded shadow">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-20 w-20 object-cover rounded"
      />
      <div className="flex flex-col items-center ml-4">
        <h4 className="font-semibold">{item.title}</h4>
        <p className=" text-gray-600">
          ${item.price} × {item.quantity}
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              item.quantity > 1 &&
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity - 1 })
              )
            }
            className="w-8 h-8 border border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50 flex items-center justify-center"
          >
            -
          </button>
          <span className="px-3 py-1 border border-gray-300 rounded min-w-12 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 })
              )
            }
            className="w-8 h-8 border border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50 flex items-center justify-center"
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-white bg-red-500 px-2 py-1 rounded-md cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
