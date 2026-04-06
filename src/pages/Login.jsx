import { useState } from "react";
import API from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const res = await API.post("/auth/login", { email, password });

    // ✅ Save token
    localStorage.setItem("token", res.data.token);

    // ✅ Save user (if exists)
    if (res.data.user) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }

    alert("Login successful ✅");

    // ✅ Redirect
    window.location.href = "/";

  } catch (err) {
    console.error(err);

    if (err.response) {
      alert(err.response.data.message || "Login failed ❌");
    } else {
      alert("Server not responding ❌");
    }
  }
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