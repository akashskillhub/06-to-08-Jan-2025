import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Setting from './pages/Setting'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import AdminNavbar from './components/AdminNavbar'

const App = () => {
  return <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<> <Navbar /> <Outlet />  </>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='setting' element={<Setting />} />
        </Route>

        <Route path='/admin' element={<> <AdminNavbar /> <Outlet />  </>}>
          <Route index element={<Dashboard />} />
          <Route path='account' element={<Account />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App