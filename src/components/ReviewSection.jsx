import {useState} from "react";
import API from "../services/api";

function ReviewSection({productId}) {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const submitReview = async () => {
        if(!comment) {
            alert("Please write a review");
            return;
        }
        try {
            await API.post("/reviews", {
                productId,
                rating,
                comment
            });
            alert("Review added successfukky");
            setComment("");
            setRating(5);
        } catch (error) {
            console.error(err);
            alert("failed to add review");
        }
    };
    return (
        <div className="mt-6 border-t pt-4">
            
        <h2 className="text-lg font-bold">Write a Review</h2>
    
    {/* ⭐ Rating */}
    <select value={rating}
    onChange={(e) => setRating(e.target.value)}
    className="border pt-2 mt-2"
    >
        <option value={5}>⭐⭐⭐⭐⭐</option>
        <option value={4}>⭐⭐⭐⭐</option>
        <option value={3}>⭐⭐⭐</option>
        <option value={2}>⭐⭐</option>
        <option value={1}>⭐</option>
    </select>
    {/* ✍️ Comment */}
    <textarea
    placeholder="Write review..."
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    className="border p-2 w-full mt-2"
    />
     {/* 🚀 Submit */}
     <button onClick={submitReview}
     className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
     >
        Submit Review
     </button>
     </div>
    );
}
export default ReviewSection;