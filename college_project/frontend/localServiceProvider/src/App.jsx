
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LocalServiceFindDashboard from './pages/admin/Admin_dashboard.jsx'
import UserLogin from './pages/user/Userlogin.jsx'
// import Userprovider from './pages/provider/Userprovider.jsx'
import Home from './pages/Home.jsx'
// import Appbar from './component/pages/Appbar.jsx'
import ServiceListingPage from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
// import Userlogin from './auth/Userlogin.jsx'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
// import RatingHistory from './component/pages/RatingHistory.jsx'
import Footer from './component/Home_components/Footer.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import Unauthorized from './pages/Unauthorized.jsx'
import NotFound from './pages/NotFound.jsx'
import { handleAlreadyLogged } from './APIs/authApis.js'
import RatingHistory from './pages/RatingHistory.jsx';
// import Admindashboard from './component/pages/Admin_dashboard.jsx'
// import Userprovider from './auth/Userprovider.jsx'
// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//       {/* <Appbar/> */}
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/services' element={<ServiceListingPage />}/>
//         <Route path='/Contact' element={<Contact/>}/>
//         <Route path='/About' element={<About/>}/>
//         {/* <Route path='/service' element={<RatingHistory/>}/> */}
//         <Route path='/AdminDashboard' element={<LocalServiceFindDashboard/>}/>
//         {/* <Route path='/' element={<Userlogin/>}/> */}
//         {/* <Route path='/' element={<Userprovider/>}/> */}
//         <Route path='/user-login' element={<UserLogin />}/>
//       </Routes>
//       {/* <Footer/> */}
//     </BrowserRouter>
//     </>
//   )
// }

// export default App

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // const handleAlreadyLogged = HandleAlreadyLogged();
//   useEffect(()=>{
// handleAlreadyLogged(dispatch,navigate)
//   },[])
  return (
    // <BrowserRouter>
      <Routes>
        {/* ✅ Main layout (Header + Footer always visible) */}
        <Route element={<MainLayout />}>
          {/* 🌐 Public Routes */}
          <Route path="/user-login" element={<UserLogin />} />
          <Route
              path="/RatingHistory"
              element={<RatingHistory />}
            />
          {/* <Route path="/provider-register" element={<ProviderRegister />} /> */}

          {/* 🧭 Shared Protected Routes for "user" and "admin" */}
          <Route element={<ProtectedRoute allowedRoles={["user", "admin","provider"]} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<ServiceListingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>

          {/* 🧭 Admin-only Routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route
              path="/admin-dashboard"
              element={<LocalServiceFindDashboard />}
            />
            
          </Route>

          {/* 🧭 Provider-only Routes */}
          {/* <Route element={<ProtectedRoute allowedRoles={["provider"]} />}>
            <Route
              path="/provider-dashboard"
              element={<ProviderDashboard />}
            />
          </Route> */}
        </Route>
        {/* ❌ Unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
  );
}