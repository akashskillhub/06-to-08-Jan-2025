import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import AdminLogin from './pages/public/AdminLogin'
import UserLogin from './pages/public/UserLogin'
import Users from './pages/admin/Users'
import Todos from './pages/admin/Todos'
import UserTodos from './pages/user/UserTodos'
import AdminNavbar from './componant/admin/AdminNavbar'
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import AdminProtected from './share/AdminProtected'
import UserProtected from './share/UserProtected'
const App = () => {
  return <>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route path='/user-login' element={<UserLogin />} />

        <Route path='/admin' element={<AdminProtected> <AdminNavbar /> <Outlet /></AdminProtected>}>
          <Route index element={<Users />} />
          <Route path='todo' element={<Todos />} />
        </Route>

        <Route path='/account' element={<UserProtected> <UserTodos /> </UserProtected>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App