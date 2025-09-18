import React from 'react'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { searchProduct } from '../Redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';





function Header({insideHome}) {

 const dispatch = useDispatch()
 const wishlist = useSelector(state=>state.wishlistReducer)
  const cart = useSelector(state=>state.cartReducer)
  return (

     <div>
      <Navbar expand="lg" className="head" style={{backgroundColor:'#D8BFD8',height:"4.5rem"}}>
      <Container fluid>
      
        <Navbar.Brand href="#" className='text-light ps-3' style={{color:"white", marginLeft:"5rem",paddingTop:"1rem" , fontFamily:"Playfair Display ",fontWeight:"bold",fontSize:"2rem"}}><i class="fas fa-feather-alt"></i>Shopify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
       <Nav.Item>
      
           <div className='pt-3' style={{marginLeft:"11rem"}}>
              {insideHome && <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))}  className='form-control' style={{width:"20rem"}} type="text" placeholder='Search here' />}
           </div>       </Nav.Item>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>
      
                  <Link to={"/wishlist"} className='p-1 ' style={{fontSize:"1.5rem"}}><i 
         style={{color:"#9e0221ff"}}  class="fa-solid fa-heart"></i><h6 style={{display:"inline"}}><Badge bg="secondary">{wishlist?.length}</Badge></h6></Link>
        <Link  to={"/cart"}  style={{fontSize:"1.5rem"}}><i style={{color:"white"}} class="fa-solid fa-cart-shopping"></i><h6 style={{display:"inline"}}><Badge bg="secondary">{cart?.length}</Badge></h6></Link>
      
      </Container>
    </Navbar>
    </div>

  )
}

export default Header