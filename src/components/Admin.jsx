import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import AdminCard from "./AdminCard";
import OrderChart from "./OrderChart";

const Admin = () => {
  return (
    <div className=" pt-2 bg-[#FFF6F4;] px-10">
      <div className=" flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-white px-4 py-2 border-2 border-blue-800 flex flex-row items-center text-blue-800 rounded-md">
          <IoSettingsOutline className="size-7 text-blue-800 mr-2" />
          Manage
        </button>
      </div>
      <div className="grid grid-cols-4 gap-20 mt-2">
        <AdminCard />
        <AdminCard />
        <AdminCard />
        <AdminCard />
      </div>
      <OrderChart className="my-7 h-96" />
      <OrderChart className="my-7 h-96" />
      <OrderChart className="my-7 h-96" />
      <OrderChart className="my-7 h-96" />
      <OrderChart className="my-7 h-96" />
      <OrderChart className="my-7 h-96" />
      <OrderChart className="my-7 h-96" />
    </div>
  );
};

export default Admin;
