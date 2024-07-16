import Vacancy from './Pages/Vacancy/Vacancy'
import Item from './Pages/Item/Item'
import { Route, Routes } from 'react-router-dom'
import Basket from './Pages/Basket/Basket'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Vacancy />}></Route>
        <Route path={'/:id/:title'} element={<Item />}></Route>
        <Route path={'/basket'} element={<Basket />}></Route>
      </Routes>
    </>
  )
}

export default App