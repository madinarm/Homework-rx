import './App.css'
import Products from './Pages/Products'
import ProductView from './Pages/Product'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Routes>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:id' element={<ProductView/>}/>
     </Routes>
    </>
  )
}

export default App
