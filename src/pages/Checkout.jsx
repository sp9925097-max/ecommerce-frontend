import API from "../services/api";

function Checkout() {
    const placeOrder = async () => {
        try {
            await API.post("/orders/place");
            alert("Order placed successfully");
        } catch {
            alert("Order failed");
        }
    };
    const handlePayment = async () => {
        try {
            const res = await API.post("/payment/create-order?amount=500");
            const options = {
                key: "rzp_test_SauPZxQxg3oDoQ",
                amount: 500 *100,
                currency: "INR",
                name: "E-Shop",
                order_id: res.data.id,

                handler : function (response) {
                    alert("Payment successful");

                    API.post("/orders/place");
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        }
    }
    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={placeOrder}>Place Order</button>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
}
export default Checkout;