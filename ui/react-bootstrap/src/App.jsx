import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import "bootstrap/dist/css/bootstrap.min.css"
import LearnButton from './pages/LearnButton'
import LearnAlert from './pages/LearnAlert'
import LearCard from './pages/LearCard'
import LearnModal from './pages/LearnModal'
import LearnOffcanvas from './pages/LearnOffcanvas'
import LearnCarousel from './pages/LearnCarousel'
import LearnGrid from './pages/LearnGrid'
const App = () => {
  return <>
    <BrowserRouter>
      <div> <Link to="/">home</Link> </div>
      <div> <Link to="/buttons">buttons</Link> </div>
      <div> <Link to="/alert">alert</Link> </div>
      <div> <Link to="/card">card</Link> </div>
      <div> <Link to="/modal">modal</Link> </div>
      <div> <Link to="/offcanvas">offcanvas</Link> </div>
      <div> <Link to="/carousel">carousel</Link> </div>
      <div> <Link to="/grid">grid</Link> </div>
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/buttons' element={<LearnButton />} />
        <Route path='/alert' element={<LearnAlert />} />
        <Route path='/card' element={<LearCard />} />
        <Route path='/modal' element={<LearnModal />} />
        <Route path='/offcanvas' element={<LearnOffcanvas />} />
        <Route path='/carousel' element={<LearnCarousel />} />
        <Route path='/grid' element={<LearnGrid />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App