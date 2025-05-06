import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
export const Skillhub = createContext()

const App = () => {
  const [auth, setAuth] = useState()
  return <Skillhub.Provider value={{ auth, setAuth }}>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </Skillhub.Provider>
}

export default App