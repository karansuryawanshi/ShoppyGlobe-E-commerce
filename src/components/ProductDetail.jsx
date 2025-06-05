// src/components/ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import { Star } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  // useEffect to fetch data with id
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setProduct(null));
  }, [id]);

  // if not product is not fetch then show loading
  if (!product) return <p className="text-center mt-10 ">Loading...</p>;

  // if not found with id then show this
  if (product?.message === `Product with id '${id}' not found`) {
    return <p className="text-center text-red-600 mt-10">{product.message}</p>;
  }

  // to show product details
  if (product) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full md:w-[90em] rounded shadow"
          />
          <div className=" flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold my-1">{product.title}</h1>
              <p
                className={`${
                  product.availabilityStatus === "In Stock"
                    ? "bg-emerald-300 text-black px-2 py-1 rounded-lg text-sm"
                    : "bg-red-300 text-white px-2 py-1 rounded-lg text-sm"
                }`}
              >
                {product.availabilityStatus}
              </p>
            </div>
            <p className="text-2xl font-semibold text-blue-600 my-1">
              <span className="text-red-500 mr-3">
                -{product.discountPercentage}%
              </span>
              ${product.price}
            </p>
            <p className="flex gap-1 items-center">
              <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
              <span className="text-neutral-600">
                {product.price} ({product.stock} in stock)
              </span>
            </p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex flex-col gap-6">
              <p className="flex gap-18">
                <span className="font-semibold">Brand</span>
                {product.brand}
              </p>
              <p className="flex gap-13">
                <span className="font-semibold">category</span>
                {product.category}
              </p>
              <p className="flex gap-5">
                <span className="font-semibold">Return policy</span>
                {product.returnPolicy}
              </p>
              <p className="flex gap-13">
                <span className="font-semibold">warranty</span>
                {product.warrantyInformation}
              </p>
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
