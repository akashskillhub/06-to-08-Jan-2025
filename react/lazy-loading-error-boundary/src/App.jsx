import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'

//                      👇 dynamic imports
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const Test = lazy(() => import("./pages/Test"))

const App = () => {
  return <>
    <BrowserRouter>
      <div> <Link to="/">home</Link> </div>
      <div> <Link to="/about">about</Link> </div>
      <div> <Link to="/contact">contact</Link> </div>
      <div> <Link to="/test">test</Link> </div>
      <Suspense fallback={<div>please wait</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/test' element={<Test />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
}

export default App