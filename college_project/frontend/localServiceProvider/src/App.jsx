import React from 'react'
// import About from './component/AboutPage'
// import AboutPage from './component/AboutPage'
import Home from './component/pages/Home.jsx'
import Appbar from './component/pages/Appbar.jsx'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}
export default App