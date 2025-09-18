import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/slices/wishlistSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/slices/cartSlice'





function View() {
  const dispatch = useDispatch()
  const{id} = useParams()
  const [product,setproduct] = useState({})
  

  console.log(product);
  
  
 useEffect(()=>{
if(localStorage.getItem("products")){
  const products = JSON.parse(localStorage.getItem("products")) 

  setproduct(products.find(item=>item.id==id))
 
  
}
 },[])
  
  return (
    <div>
          <Header/>
          <div className='d-flex'>
            <div>
                <img style={{height:"35rem"}} src={product.thumbnail} alt="" />
            </div>
          <div style={{height:"100vh",width:"40%"}}>
              <div style={{marginTop:"5.5rem"}}>
                <h3 style={{fontSize:"0.85rem",color:"#777"}}>Product ID:{product.id}</h3>
                <h1 style={{fontFamily:"Playfair Display",fontWeight:"bold",color:"#2C2C2C",fontSize:"2.2rem",margin: "0.5rem 0"}}>{product.title}</h1>
                <h2 style={{fontSize:"1.8rem",fontFamily:"Playfair Display",color:"#9B8AFB"}}>${product.price}</h2>
                <p className='mt-2' style={{fontFamily:"Lora",lineHeight:"1.5",textAlign:"justify",color:"#555555",fontSize:"1rem"}}>{product.description}</p>
                    <button onClick={()=>dispatch(addToWishlist(product))} className='btn  mt-2'><i 
         style={{color:"#9e0221ff",fontSize:"1.4rem"}}  class="fa-solid fa-heart-circle-plus"></i></button>
         <button onClick={()=>dispatch(addToCart(product))}  className='btn  mt-2 '><i 
         style={{color:"#4c4a4aff",fontSize:"1.4rem"}}  class="fa-solid fa-cart-plus"></i></button>
               
            </div>
          </div>

          </div>
         </div>
   
  )
}

export default View