import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  // getting no of items from redux function
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">
        ShoppyGlobe
      </Link>
      <nav className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/cart" className="relative inline-flex items-center">
          <ShoppingCart />
          {cartCount > 0 && (
            <span className="absolute  -right-6 text-white text-xs rounded-full px-1.5">
              ({cartCount})
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
