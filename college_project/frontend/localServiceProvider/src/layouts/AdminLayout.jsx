import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
