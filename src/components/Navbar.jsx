import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="bg-gray-900 text-white flex justify-between p-4">
            <h2 className="font-bold text-xl">E-Shop</h2>
            <div className="flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/orders">Orders</Link>
            </div>
        </div>
    );
}
export default Navbar;