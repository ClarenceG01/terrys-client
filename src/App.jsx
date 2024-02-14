import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toaster from "react-hot-toast";
import Login from "./components/General/Login/Login";
import Signup from "./components/General/Signup/Signup";
import Landing from "./pages/Landing/Landing";
import Shop from "./pages/shop/Shop";
import Alertbox from "./components/General/AlertBox/Alertbox";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
