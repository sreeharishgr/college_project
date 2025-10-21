import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthCheck } from "../hooks/useAuthCheck";

export default function ProtectedRoute({ allowedRoles }) {
  const { loading, isValid, account } = useAuthCheck();
  const token = localStorage.getItem("AccountToken");
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "18px",
          color: "#555",
        }}
      >
        Checking access...
      </div>
    );
  }

  if (!token || !isValid) return <Navigate to="/" replace />;

  if (allowedRoles && !allowedRoles.includes(account.role))
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
}
