import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loadng, setLoading] = useState(true);

    useEffect(() => {
        API.get("/products")
        .then(res => setProducts(res.data))
        .catch(err =>console.log(err))
        .finally(() => setLoading(false));
    },[]);
    if (loadng) return <h2 className="text-center mt-10">Loading products...</h2>;
    return (
        <div>
             {/* 🔍 Search Bar */}
             <div className="p-4 flex justify-center">
                <input type="text"
                placeholder="Search products..."
                className="border p-2 w-1/2 rounded"
                onChange={(e) => setSearch(e.target.value)}
                />
             </div>
             {/* 🛍️ Product Grid */}
             <div className="grid grid-cols-4 gap-6 p-4">
                {
                    products.filter(p => p.name.toLowerCase().includes(search.toLocaleLowerCase())
                )
                .map(p => (
                    <div key={p.id}
                    className="border p-4 rounded shadow hover:shadow-lg transition"
                    >
                        {/* 📸 Image */}
                        <img src="`http://localhost:8080/uploads/${p.image}`"
                        alt={p.name}
                        className="h-40 w-full object-cover"
                        />
                        {/* 📦 Details */}
                        <h3 className="font-semibold mt-2">{p.name}</h3>
                        <p className="text-green-600 font-bold">₹{p.price}</p>
                        {/* 🔗 View Button */}
                        <Link to={`/product/${p.id}`}>
                        <button bg-yellow-400 hover:bg-yellow-500 px-3 py-1 mt-2 w-full rounded>
                            View
                            </button>
                            </Link>
                            </div>
                ))
                }
             </div>
        </div>
    );
}
export default Home;