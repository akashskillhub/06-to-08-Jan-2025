import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/public/Home'
import Details from './pages/public/Details'
import Login from './pages/public/Login'
import Register from './pages/public/Register'
import PublicNavbar from './components/PublicNavbar'
import AdminNavbar from './components/AdminNavbar'
import Products from './pages/admin/Products'
import Users from './pages/admin/Users'
import Orders from './pages/admin/Orders'
import UserNavbar from './components/UserNavbar'
import History from './pages/user/History'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><PublicNavbar /><Outlet /></>}>
          <Route index element={<Home />} />
          <Route path='details' element={<Details />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/admin' element={<><AdminNavbar /><Outlet /></>}>
          <Route index element={<Products />} />
          <Route path='users' element={<Users />} />
          <Route path='orders' element={<Orders />} />
        </Route>
        <Route path='/user' element={<><UserNavbar /><Outlet /></>}>
          <Route index element={<History />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App