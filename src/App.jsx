import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/General/Login/Login";
import Signup from "./components/General/Signup/Signup";
import Landing from "./pages/Landing/Landing";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
