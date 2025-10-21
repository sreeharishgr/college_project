import React from "react";
import LocalServiceFindDashboard from "./pages/admin/Admin_dashboard.jsx";
import UserLogin from "./pages/user/Userlogin.jsx";
import Home from "./pages/Home.jsx";
import ServiceListingPage from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Unauthorized from "./pages/Unauthorized.jsx";
import NotFound from "./pages/NotFound.jsx";
import RatingHistory from "./pages/RatingHistory.jsx";
import HomeChoice from "./pages/choicePage.jsx";
import ProfileForm from "./pages/user/UserRegister.jsx";
import ProviderLogin from "./pages/provider/ProviderLogin.jsx";
import ProviderPortalForm from "./pages/provider/providerRegister.jsx";
import NotificationPage from "./pages/provider/ProviderNotification.jsx";
import GigsPage from "./pages/provider/ProviderDashboard.jsx";

export default function App() {
  return (
    <Routes>
      {/* ✅ Main layout (Header + Footer always visible) */}
      <Route element={<MainLayout />}>
        {/* 🌐 Public Routes */}

        <Route path="/" element={<HomeChoice />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/provider-login" element={<ProviderLogin />} />
        <Route path="/services" element={<ServiceListingPage />} />
        
        <Route path="/user-register" element={<ProfileForm />} />
        <Route path="/provider-register" element={<ProviderPortalForm />} />
        
        <Route
          path="/admin-dashboard"
          element={<LocalServiceFindDashboard />}
        />
        <Route
          path="/notifications"
          element={<NotificationPage />}
        />
        <Route path="/RatingHistory" element={<RatingHistory />} />
        {/* <Route path="/provider-register" element={<ProviderRegister />} /> */}

        {/* 🧭 Shared Protected Routes for "user" and "admin" */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["user", "admin", "provider"]} />
          }
        >
          <Route path="/home" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* 🧭 Admin-only Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}></Route>

        {/* 🧭 Provider-only Routes */}
        <Route element={<ProtectedRoute allowedRoles={["provider"]} />}>
            {/* <Route
              path="/provider-dashboard"
              element={<ProviderDashboard />}
            /> */}
            <Route path="/provider-home" element={<GigsPage />} />
          </Route>
      </Route>
      {/* ❌ Unauthorized */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
