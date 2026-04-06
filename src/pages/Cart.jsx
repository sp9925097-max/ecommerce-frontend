import { useEffect, useState } from "react";
import API from "../services/api";

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/cart")
      .then(res => setCart(res.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading cart...</h2>;
  if (cart.length === 0) return <h2>Cart is empty 🛒</h2>;

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "10px"
          }}
        >
          <div>
            <h3>{item.product.name}</h3>
            <p>₹{item.product.price}</p>
          </div>

          <div>
            <p>Qty: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;