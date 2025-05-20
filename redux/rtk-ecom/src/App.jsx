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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import AdminLogin from './pages/public/AdminLogin'
import UserProtected from './share/UserProtected'
import AdminProtected from './share/AdminProtected'
import Cart from './pages/public/Cart'
import Checkout from './pages/public/Checkout'
import Success from './pages/public/Success'

const App = () => {

  return <>
    <ToastContainer />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><PublicNavbar /><Outlet /></>}>
          <Route index element={<Home />} />
          <Route path='details/:skillhub' element={<Details />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='admin-login' element={<AdminLogin />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<UserProtected><Checkout /></UserProtected>} />
          <Route path='success' element={<UserProtected><Success /></UserProtected>} />
        </Route>
        <Route path='/admin' element={<AdminProtected><AdminNavbar /><Outlet /></AdminProtected>}>
          <Route index element={<Products />} />
          <Route path='users' element={<Users />} />
          <Route path='orders' element={<Orders />} />
        </Route>
        <Route path='/user' element={<UserProtected><UserNavbar /><Outlet /></UserProtected>}>
          <Route index element={<History />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App