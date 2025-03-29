import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Budget from "./pages/Budget"
import Navbar from "./components/Navbar"

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}
export default App