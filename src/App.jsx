import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Form1 from "./components/Signup/Form1";
import Form2 from "./components/Signup/Form2";
import FormLayout from "./components/FormLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<FormLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Form2 />} />
          </Route>
          <Route path="signup/credentials" element={<Form1 />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
