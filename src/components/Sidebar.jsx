import React from "react";
import IconHolder from "./IconHolder";
import { IoHomeOutline } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";

// const Sidebar = () => {
//   return (
//     <div className="bg-accent w-[150px] fixed top-0 left-0 h-full overflow-y-auto flex flex-col items-center py-2">
//       <div className="flex flex-col items-center justify-center">
//         <IconHolder to="." end>
//           <IoHomeOutline className="size-7 text-white" />
//         </IconHolder>
//         <IconHolder to="/admin/products">
//           <PiShoppingCartSimpleBold className="size-7 text-white" />
//         </IconHolder>
//         <IconHolder to="/admin/center">
//           <RiAdminLine className="size-7 text-white" />
//         </IconHolder>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;

const Sidebar = () => {
  return (
    <div className="bg-accent w-[150px] sticky top-0 h-screen overflow-y-auto flex flex-col items-center py-2">
      <div className="flex flex-col items-center justify-center">
        <IconHolder to="." end>
          <IoHomeOutline className="size-7 text-white" />
        </IconHolder>
        <IconHolder to="/admin/products">
          <PiShoppingCartSimpleBold className="size-7 text-white" />
        </IconHolder>
        <IconHolder to="/admin/center">
          <RiAdminLine className="size-7 text-white" />
        </IconHolder>
      </div>
    </div>
  );
};

export default Sidebar;
