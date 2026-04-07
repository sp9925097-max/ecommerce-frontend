import { useState } from "react";
import API from "../services/api";

function Admin() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: ""
    });

    const addProduct = async () => {
        try {
            await API.post("/proucts",product);
            alert("Product added");
        } catch (error) {
            alert("Failed");
        }
    };
    return (
        <div>
            <h1>Add Product</h1>
            <input placeholder="Name" onChange={e =>setProduct({...product,name: e.target.value})}/>
            <input placeholder="Price" onChange={e =>setProduct({...product,price: e.target.value})}/>
            <input placeholder="Description" onChange={e =>setProduct({...product,description: e.target.value})}/>

            <button onClick={addProduct}>Add</button>
        </div>
    );
}
export default Admin;