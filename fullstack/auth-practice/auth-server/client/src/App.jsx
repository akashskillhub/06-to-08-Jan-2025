import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Protected from './share/Protected'
import Navbar from './components/Navbar'

const App = () => {
  return <>
    <div style={{
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: "red",
      fontSize: "24px",
      color: "white"
    }}> {import.meta.env.VITE_BACKEND_URL} </div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Protected><Dashboard /></Protected>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App