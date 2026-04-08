import { useEffect, useState } from "react";
import API from "../services/api";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        API.get("/orders")
        .then(res => setOrders(res.data))
        .catch(err => console.log(err));
    },[]);
    return (
        <div>
            <h1>Your Orders</h1>

            {orders.map(order =>(
                <div key={order.id}>
                    <h3>Order ID: {order.id}</h3>
                    <p>Total: ₹{order.totalAmount}</p>
                    <p>Status: {order.status}</p>
                    </div>
            ))}
        </div>
    );
}
export default Orders;