import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProtectedRoute from "./ProtectedRoutes";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/cart" element={
        <ProtectedRoute>
          <Cart/>
        </ProtectedRoute>
      }/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="register" element={<Register/>}/>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App
