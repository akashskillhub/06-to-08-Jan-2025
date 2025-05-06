import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import LearnLocal from './pages/LearnLocal'
import Signin from './pages/Signin'

export const Auth = createContext()
const App = () => {
  const x = localStorage.getItem("auth")
  const [user, setUser] = useState(JSON.parse(x))
  return <Auth.Provider value={{ user, setUser }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/local' element={<LearnLocal />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </Auth.Provider>
}
export default App