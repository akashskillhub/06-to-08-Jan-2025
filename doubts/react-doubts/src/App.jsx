import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LearnState from './pages/LearnState'
import LearnEffect from './pages/LearnEffect'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import LearnToast from './pages/LearnToast'

const App = () => {
  return <BrowserRouter>
    <ToastContainer position='top-center' theme='colored' autoClose="1000" />
    <Link to="/">state</Link>
    <Link to="/effect">effect</Link>
    <Link to="/toast">toast</Link>
    <Routes>
      <Route path='/' element={<LearnState />} />
      <Route path='/effect' element={<LearnEffect />} />
      <Route path='/toast' element={<LearnToast />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}

export default App