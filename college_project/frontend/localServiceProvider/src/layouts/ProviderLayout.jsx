import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/provider/Sidebar"; // import your Sidebar file

const ProviderLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* ✅ Sidebar on left */}
      <Sidebar />

      {/* 🧭 Outlet = provider page content (Dashboard, RatingHistory, etc.) */}
      <div style={{ flexGrow: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProviderLayout;
