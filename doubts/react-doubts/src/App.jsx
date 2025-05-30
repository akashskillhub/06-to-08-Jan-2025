import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LearnState from './pages/LearnState'
import LearnEffect from './pages/LearnEffect'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import LearnToast from './pages/LearnToast'
import LearnProps from './pages/LearnProps'
import LearnRedux from './pages/LearnRedux'
import LearnApi from './pages/LearnApi'
import LearnFormik from './pages/LearnFormik'

const App = () => {
  return <>
    <BrowserRouter>
      <ToastContainer position='top-center' theme='colored' autoClose="1000" />
      <div><Link to="/">state</Link></div>
      <div><Link to="/effect">effect</Link></div>
      <div><Link to="/toast">toast</Link></div>
      <div><Link to="/props">props</Link></div>
      <div><Link to="/redux">redux</Link></div>
      <div><Link to="/api">api</Link></div>
      <div><Link to="/formik">formik</Link></div>
      <hr />
      <Routes>
        <Route path='/' element={<LearnState />} />
        <Route path='/effect' element={<LearnEffect />} />
        <Route path='/toast' element={<LearnToast />} />
        <Route path='/props' element={<LearnProps />} />
        <Route path='/redux' element={<LearnRedux />} />
        <Route path='/api' element={<LearnApi />} />
        <Route path='/formik' element={<LearnFormik />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App