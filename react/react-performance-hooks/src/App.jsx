import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Todos from "./pages/Todos"
import LearnRef from "./pages/LearnRef"
import PracticeRef from "./pages/PracticeRef"
import LearnCallBack from "./pages/LearnCallBack"
import LearnMemo from "./pages/LearnMemo"
import LearnReduce from "./pages/LearnReduce"
import LearnCustomHook from "./pages/LearnCustomHook"

const App = () => {
  return <>
    <BrowserRouter>
      <div> <Link to="/">ref</Link> </div>
      <div> <Link to="/todos">todos</Link> </div>
      <div> <Link to="/ref">practice ref</Link> </div>
      <div> <Link to="/callback">callback</Link> </div>
      <div> <Link to="/memo">memo</Link> </div>
      <div> <Link to="/reduce">reduce</Link> </div>
      <div> <Link to="/custom">custom</Link> </div>
      <Routes>
        <Route path='/' element={<LearnRef />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/ref' element={<PracticeRef />} />
        <Route path='/callback' element={<LearnCallBack />} />
        <Route path='/memo' element={<LearnMemo />} />
        <Route path='/reduce' element={<LearnReduce />} />
        <Route path='/custom' element={<LearnCustomHook />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App