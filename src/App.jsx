import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import FormLayout from "./layout/FormLayout";
import MainLayout from "./layout/MainLayout";
import Admin from "./components/Admin";
import AdminLayout from "./layout/AdminLayout";
import AdminProducts from "./components/AdminProducts";
import AdminCentre from "./components/AdminCentre";
import NotFound from "./components/NotFound";
import AuthRequired from "./layout/AuthRequired";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDescription from "./components/ProductDescription";
import ShopLayout from "./layout/ShopLayout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* main layout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* auth required */}
            <Route element={<AuthRequired />}>
              <Route path="shop" element={<ShopLayout />}>
                <Route index element={<Shop />} />
                <Route path=":id" element={<ProductDescription />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* form layout */}
          <Route path="user" element={<FormLayout />}>
            <Route index element={<Login />} />
            <Route path="registration" element={<Form2 />} />
            <Route path="registration/complete" element={<Form1 />} />
          </Route>

          {/* protected admin layout */}
          <Route element={<AuthRequired />}>
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="center" element={<AdminCentre />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
