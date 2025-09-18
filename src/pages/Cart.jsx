import React from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkOut, decrementQuantity, deletefromcart, emptyCart, incrementQuantity } from '../Redux/slices/cartSlice'


function Cart() {
 const dispatch = useDispatch()
  const cart = useSelector(state=>state.cartReducer)
const decrementQuant=(product)=>{
  if(product.quantity>1){
     dispatch(decrementQuantity(product))
  }
  else{
     dispatch(deletefromcart(product.id))
   }
  
   
   


 }
  return (
    <div> <Header/>
      {cart.length>0 ?
    <div className='d-flex'>
      <div className='ms-2' style={{width:"70%"}}>
        <h2 style={{fontFamily:"Playfair Display",fontSize:"2.2rem",fontWeight:"bold",color:'#3f3f3f',textAlign:"center"}}>Cart Summary</h2>
    
    
         <table style={{width:"100%",  borderCollapse: "collapse",  marginTop: "2rem",  fontFamily: "Lora", color: "#3f3f3f",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    borderRadius: "10px"}}>
        <thead>
          <tr  style={{ textAlign: "left" }}>
            <th className='p-3'>#</th>
            <th  className='p-3'>Title</th>
            <th  className='p-3'>Image</th>
            <th  className='p-3'>Quantity</th>
            <th  className='p-3'>Price</th>
            <th  className='p-3'><i class="fa-solid fa-ellipsis"></i></th>

          </tr>
        </thead>
         {cart.map((pro,index)=>(
                <tbody>
          <tr  style={{ textAlign: "left",background: "#fff" }}>
            <td className='p-3'>{index+1}</td>
            <td  className='p-3'>{pro.title}</td>
            <td  className='p-3'>
              <img src={pro.thumbnail} alt="" height={"80px"}/>
            </td>
            <td  className='p-3'>
        <div className='d-flex align-items-center'>
                  <button onClick={()=>decrementQuant(pro)} className='btn fw-bold' style={{fontSize:"0.7rem"}}><i class="fa-solid fa-minus"></i></button>
              <h5 style={{fontSize:"1.2rem"}}>{pro.quantity}</h5>
             <button onClick={()=>dispatch(incrementQuantity(pro))} className='btn fw-bold' style={{fontSize:"0.7rem"}}><i class="fa-solid fa-plus"></i></button>
        </div>
               </td>
            <td  className='p-3'>${pro.totalPrice}</td>
            <td  className='p-3'>
              <button onClick={()=>dispatch(deletefromcart(pro.id))} className='btn'><i class="fa-solid fa-trash" style={{color:"red"}}></i></button>
            </td>

          </tr>
        </tbody>))}
      </table>
     
     <div className='mt-3'>
       <button onClick={()=>dispatch(emptyCart())} className='btn m-2 fw-bold' style={{backgroundColor: "#9B8AFB", fontFamily: "Lora, serif",
      fontSize: "0.95rem",color:"white"}}>Empty Cart</button>
     <Link to={'/'} className='btn m-2 fw-bold' style={{backgroundColor: "#9B8AFB", fontFamily: "Lora, serif",
      fontSize: "0.95rem",color:"white"}}>Shop More</Link>
     </div>
      </div>
      <div style={{width:"30%"}}>
        <div className='ms-5 mt-5 ' style={{width:"80%",height:"70%", borderRadius: "12px",boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
}}>  
   <div  style={{display:"flex",alignItems:"center",flexDirection
    :"column",  
    fontFamily: "Lora, serif",position:"relative",top:"3rem"
   }}>
    
         { <h2   style={{
      fontFamily: "Playfair Display, serif",
      fontSize: "1.6rem",
      marginBottom: "1rem",
      color: "#3f3f3f",
    }}>Total items : <span>{cart.length}</span></h2>}
          <h3 style={{
      fontFamily: "Playfair Display, serif",
      fontSize: "1.8rem",
      marginBottom: "1rem",
      color: "#3f3f3f",
    }}>Total Price : <span>${cart.reduce((a,b)=>a+b.totalPrice,0)}</span></h3>
          <button onClick={()=>dispatch(checkOut())} className='btn m-2 fw-bold' style={{backgroundColor: "#9B8AFB", fontFamily: "Lora, serif",
      fontSize: "0.95rem",color:"white"}} >Check Out</button>
   </div>

        </div>

      </div>

    </div> : <div style={{textAlign:"center"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYjhcG-tcVCpdyHukFOGZLaInyXFejYzMENQ&s" alt="" /></div>
      }
    </div>
  )
}

export default Cart