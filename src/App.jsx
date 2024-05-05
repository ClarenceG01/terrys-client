import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/General/Login/Login";
import Signup from "./components/General/Signup/Signup";
import Landing from "./pages/Landing/Landing";
import Shop from "./pages/shop/Shop";
import Form1 from "./components/General/Signup/Form1";
import Form2 from "./components/General/Signup/Form2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}>
            <Route path="/signup/" element={<Form2 />} />
            <Route path="/signup/credentials" element={<Form1 />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
