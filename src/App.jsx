import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import FormLayout from "./layout/FormLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layout/MainLayout";
import Admin from "./components/Admin";
import AdminLayout from "./layout/AdminLayout";
import AdminProducts from "./components/AdminProducts";
import AdminCentre from "./components/AdminCentre";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>
          <Route path="user" element={<FormLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Form2 />} />
          </Route>
          <Route path="signup/credentials" element={<Form1 />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="center" element={<AdminCentre />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
