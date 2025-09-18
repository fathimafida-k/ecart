import React, { use } from 'react'
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';


function Wishlist() {
  const dispatch = useDispatch()
   const wishlist = useSelector(state=>state.wishlistReducer)
   const handleCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product))
   }
  return (
    <div> <Header/>
      <h2 style={{fontFamily:"Playfair Display",fontSize:"2.2rem",fontWeight:"bold",color:'#3f3f3f',textAlign:"center"}}>Wishlist</h2>
     {wishlist.length>0 ? <Row>
        {wishlist.map(pro=>(
           <Col lg={4}>
         <div>
        <Card style={{ width: '18rem' , borderRadius:"15px",marginLeft:"2rem",marginTop:"3rem",border:"1px solid #c2b9b9ff", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)"}}>
      <Card.Img  variant="top" src={pro.thumbnail} />
      <Card.Body>
        <Card.Title style={{fontFamily:"Playfair Display" ,color:"#2C2C2C",fontSize:"1.3rem",textAlign:"center"}}>{pro.title} </Card.Title>
       <div className='d-flex justify-content-between align-items-center'>

           <button onClick={()=>dispatch(removeFromWishlist(pro))}  className='btn  mt-2'><i 
         style={{color:"#9e0221ff",fontSize:"1.4rem"}}  class="fa-solid fa-heart-circle-xmark"></i></button>
         <button  onClick={()=>dispatch(handleCart(pro))}  className='btn  mt-2 '><i 
         style={{color:"#4c4a4aff",fontSize:"1.4rem"}}  class="fa-solid fa-cart-plus"></i></button>
      
       </div>
      </Card.Body>
    </Card>
      </div></Col>))}
       </Row>: 
       <div style={{textAlign:"center"}}>
        <img  src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="" />
       </div>
       }
    </div>
  )
}

export default Wishlist