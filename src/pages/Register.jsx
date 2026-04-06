import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
    const[user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const register = async ()=> {
        try {
            await API.post("/auth/register", user);
            alert("Registration successful");
            navigate("/login");
        } catch (error) {
            alert("Registration failed");
        }
    };
    return (
        <div>
            <h1>Register</h1>
            <input placeholder="Name" onChange={e => setUser({...user, name: e.target.value})}/>
            <input placeholder="Email" onChange={e => setUser({...user, email:e.target.value})}/>
            <input type="password" placeholder="Password" onChange={e => setUser({...user,password:e.target.value})}/>

            <button onClick={Register}>Register</button>
        </div>
    );
}
export default Register;