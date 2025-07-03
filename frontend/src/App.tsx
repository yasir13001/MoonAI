import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './app/Home'
import ShoppingAssistant from './app/ShopAssistant'
import Navbar from './component/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/shopping' element = {<ShoppingAssistant />} />
      </Routes>

    </div>
  )
}

export default App
