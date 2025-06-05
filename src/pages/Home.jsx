import ProductList from "../components/ProductList";
import { Search } from "lucide-react";
import useFetchProducts from "../hooks/useFetchProducts";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const { products, error } = useFetchProducts();

  const [isFilterProducts, setIsFilterProducts] = useState([]);

  // Search
  useEffect(() => {
    if (searchText.length > 0) {
      function filterProducts() {
        const ans = products.filter((item) => {
          return item.title
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase());
        });
        return ans;
      }
      setIsFilterProducts(filterProducts());
    } else {
      setIsFilterProducts(products);
    }
  }, [searchText, products]);

  return (
    <>
      <div className="w-58 mx-7 flex border-2 border-neutral-600 rounded-lg px-2 py-1 gap-1">
        <label htmlFor="search">
          <Search className="font-bold text-neutral-500" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by product name..."
          className="border border-gray-100 focus:outline-none focus:ring-0"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      {/* List of products */}
      <ProductList products={isFilterProducts} />
    </>
  );
};

export default Home;
