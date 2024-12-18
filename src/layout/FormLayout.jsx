import Left from "../components/Left";
import { Outlet } from "react-router-dom";

const FormLayout = () => {
  return (
    <div className="flex">
      <Left />
      <Outlet />
    </div>
  );
};

export default FormLayout;
