import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div style={{display: "flex",gap:"20px",padding: "10px", background: "#222",color: "#fff"}}>
            <h2>E-Shop</h2>
            <Link to="/" style={{color: "white"}}>Home</Link>
            <Link to="/cart" style={{color: "white"}}>Cart</Link>
            <Link to="/login" style={{color: "white"}}>Login</Link>
        </div>
    );
}
export default Navbar;