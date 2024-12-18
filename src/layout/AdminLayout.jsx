import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <AdminNav />
      <div className="flex flex-row flex-1">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
