import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ui to display products

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-600 truncate">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-blue-600">${product.price}</span>
          <p className="flex gap-1">
            <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
            <span>{product.rating}</span>
          </p>
        </div>
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="bg-emerald-600 text-white py-2 px-4 mt-3 rounded hover:bg-emerald-700 duration-300"
        >
          View
        </button>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-600 text-white py-2 px-4 mt-3 rounded hover:bg-blue-700 duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
