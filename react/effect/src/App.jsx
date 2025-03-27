import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Effect from './pages/Effect'
import Todo from './pages/Todo'

const App = () => {
  return <>
    <BrowserRouter>
      <Link to="/">home</Link>
      <Link to="/who-we-are">about</Link>
      <Link to="/reach-us">conatct</Link>
      <Link to="/effect">effect</Link>
      <Link to="/todo">todo</Link>
      <Routes>
        <Route path='/' element={<div> header <Outlet /> footer</div>}>
          <Route index element={<Home />} />
          <Route path='who-we-are' element={<About />} />
          <Route path='effect' element={<Effect />} />
          <Route path='todo' element={<Todo />} />
        </Route>

        <Route path='/reach-us' element={<div>navbar  <Outlet /></div>}>
          <Route index element={<Contact />} />
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App