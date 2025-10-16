import React from 'react'
// import About from './component/AboutPage'
// import AboutPage from './component/AboutPage'
import Home from './component/pages/Home.jsx'
import Appbar from './component/pages/Appbar.jsx'
import Service from './component/pages/Service.jsx'
import Contact from './component/pages/Contact.jsx'
import About from './component/pages/About.jsx'
import Userlogin from './auth/Userlogin.jsx'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
// import RatingHistory from './component/pages/RatingHistory.jsx'
import Footer from './component/Home_components/Footer.jsx'
// import { Dashboard } from '@mui/icons-material'
import Admindashboard from './component/pages/Admin_dashboard.jsx'
import Userprovider from './auth/Userprovider.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
      {/* <Appbar/> */}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        {/* <Route path='/service' element={<RatingHistory/>}/> */}
        <Route path='/AdminDashboard' element={<Admindashboard/>}/>
        {/* <Route path='/' element={<Userlogin/>}/> */}
        <Route path='/' element={<Userprovider/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}
export default App