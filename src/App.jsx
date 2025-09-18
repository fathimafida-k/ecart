
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {


  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/view/product/:id' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>


     
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
