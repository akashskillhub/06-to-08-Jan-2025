import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './pages/User'

import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
const App = () => {
  return <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<User />} />
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App