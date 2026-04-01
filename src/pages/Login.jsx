import { useState } from "react";
import API from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        API.post("/auth/login", {email, password})
        .then(res => {
            localStorage.setItem("token", res.data.token);
            alert("Login successful");
        })
        .catch(() => alert("Login failed"));
    };

    return (
        <div>
            <h1>Login</h1>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={login}>Login</button>
        </div>
    );
}
export default Login;