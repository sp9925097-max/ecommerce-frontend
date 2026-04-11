import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-900 text-white">
            <h2 className="font-bold text-xl">E-Shop</h2>
            <div className="flex gap-4 mt-2 sm:mt-0">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/orders">Orders</Link>
            </div>
        </div>
    );
}
export default Navbar;