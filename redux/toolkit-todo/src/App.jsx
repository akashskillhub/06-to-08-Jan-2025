import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Counter from './pages/Counter'
import Todo from './pages/Todo'
import Navbar from './components/Navbar'

import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App