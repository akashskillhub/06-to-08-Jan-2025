import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Protected from './share/Protected'
import Profile from './pages/Profile'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Protected> <Dashboard /> </Protected>} />
        <Route path='/profile' element={<Protected> <Profile /> </Protected>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App