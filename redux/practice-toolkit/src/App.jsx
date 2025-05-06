import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todo from './pages/Todo'
import Navbar from './component/Navbar'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App