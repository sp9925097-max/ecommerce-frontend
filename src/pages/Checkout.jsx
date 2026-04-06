import API from "../api";

function Checkout() {
    const placeOrder = async () => {
        try {
            await API.post("/orders/place");
            alert("Order placed successfully");
        } catch {
            alert("Order failed");
        }
    };
    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={placeOrder}>Place Order</button>
        </div>
    );
}
export default Checkout;