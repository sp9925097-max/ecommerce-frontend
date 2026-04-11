import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/products")
      .then(res => {
        console.log("API DATA:", res.data);
        setProducts(res.data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;

  // ✅ FILTER LOGIC (SAFE)
  const filteredProducts = products.filter(p =>
    (p.name || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* 🔍 SEARCH BAR */}
      <div className="p-4 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 w-1/2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ❌ EMPTY RESULT */}
      {filteredProducts.length === 0 && (
        <h2 className="text-center mt-10">No products found ❌</h2>
      )}

      {/* 🛍️ PRODUCT GRID */}
      <div className="grid grid-cols-4 gap-6 p-4">
        {filteredProducts.map(p => (
          <div
            key={p.id}
            className="border p-4 rounded shadow hover:shadow-lg"
          >
            <img
              src={`http://localhost:8080/uploads/${p.image}`}
              alt={p.name}
              className="h-40 w-full object-cover"
            />

            <h3 className="font-semibold mt-2">{p.name}</h3>
            <p className="text-green-600 font-bold">₹{p.price}</p>

            <Link to={`/product/${p.id}`}>
              <button className="bg-yellow-400 px-3 py-1 mt-2 w-full rounded">
                View
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;