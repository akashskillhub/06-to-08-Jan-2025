import React from 'react'
import Todo from './pages/Todo'
import "react-toastify/ReactToastify.css"
import { ToastContainer } from 'react-toastify'
const App = () => {
  return <>
    <ToastContainer />
    <Todo />
  </>
}

export default App