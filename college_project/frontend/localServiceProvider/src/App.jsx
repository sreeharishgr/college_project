import React from 'react'
// import About from './component/AboutPage'
// import AboutPage from './component/AboutPage'
import Home from './component/pages/Home.jsx'
import Appbar from './component/pages/Appbar.jsx'
import Service from './component/pages/Service.jsx'
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import RatingHistory from './component/pages/RatingHistory.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        {/* <Route path='/service' element={<RatingHistory/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App