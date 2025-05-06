import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'


import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Home from './pages/Home'
import Blog from './pages/Blog'
import Protected from './pages/Protected'
const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/blog' element={<Protected> <Blog /> </Protected>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App