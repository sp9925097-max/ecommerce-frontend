import { useEffect, useState } from "react";
import API from "../services/api";
function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        API.get("/cart")
        .then(res => setCart(res.data))
        .catch(err => console.log(err));
    },[]);
    return (
        <div>
            <h1>Your Cart</h1>
            {
                cart.map(item =>(
                    <div key={item.id}>
                        <h3>{item.product.name}</h3>
                        <p>Qty: {item.quantity}</p>
                        <p>$(item.product.price)</p>
                        </div>
                ))
            }
        </div>
    );
}
export default Cart;