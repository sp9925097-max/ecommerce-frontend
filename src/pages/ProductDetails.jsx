import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import ReviewSection from "../components/ReviewSection";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        API.get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const addToCart = async () => {
        try {
            await API.post("/cart/add", {
                productId: product.id,
                quantity: 1
            });
            alert("Added to cart");
        } catch (err) {
            console.error(err);
            if (err.response) {
                alert("❌ " + err.response.data.message);
            } else {
                alert("❌ Server not responding");
            }
        }
    };

    if (!product) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{product.name}</h1>

            <img
                src={`http://localhost:8080/uploads/${product.image}`}
                width="200"
                alt={product.name}
            />

            <p>{product.description}</p>
            <h3>₹{product.price}</h3>

            <button onClick={addToCart}>
                Add to Cart
            </button>

            <ReviewSection productId={product.id} />
        </div>
    );
}

export default ProductDetails;