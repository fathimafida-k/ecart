import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div>
       <div style={{backgroundColor:"#D8BFD8"
}}>
      <hr />
      <div className='row ms-5 mt-5'>
        <div className='col-lg-4'>   <h2 style={{color:"white", fontFamily:"Playfair Display ",fontWeight:"bold",fontSize:"2rem"}}><i class="fas fa-feather-alt"></i>
Shopify</h2>
       <p style={{color:"#555555" , fonSize:"0.90rem" , lineHeight:"1.5", fontFamily:"Lora",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus quia excepturi magni, tempora nobis in totam placeat? Magni non, consequatur perspiciatis qui nisi impedit minus harum suscipit nulla molestiae!</p>
         
        </div>
        <div className='col-lg-2 ps-5'>
          <h3 style={{color:"white" ,fontFamily:"Playfair Display"}}>Links</h3>
          <div>
          <Link className='d-block' to={'/'}  style={{textDecoration:"none" , color:"#555555"}}>Home</Link>
            <Link className='d-block' to={'/wishlist'}  style={{textDecoration:"none" , color:"#555555"}}>Wishlist</Link>
              <Link className='d-block' to={'/'}  style={{textDecoration:"none" , color:"#555555"}}>Cart</Link>
          </div>
        </div>
        <div className='col-lg-2'>
          <h3 style={{color:"white" ,fontFamily:"Playfair Display"}}>Guides</h3>
            <Link className='d-block' to={'/'} style={{textDecoration:"none" , color:"#555555"}}>React</Link>
            <Link className='d-block' to={'/'}  style={{textDecoration:"none" , color:"#555555"}}>Reacr-Bootstrap</Link>
              <Link className='d-block' to={'/'}  style={{textDecoration:"none" , color:"#555555"}}>React-Router</Link>
        </div>
        <div className='col-lg-4'>
          <h3 style={{color:"white",fontFamily:"Playfair Display"}}>Contact Us</h3>
          <div className='d-flex'>
            <input type="text" placeholder='Enter Email' className='form-control mt-3' style={{width:"15rem"}} />
          <button className='btn mt-3 ms-2 ' style={{backgroundColor:"#9B8AFB" , height:"3rem"}}>

<i style={{color:"white"}} class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex' style={{position:"relative" ,right:"2rem"}}>
            <a href=""><i class="fa-brands fa-github p-4" style={{fontSize:"30px" ,color:"#555555"}}></i></a>
                    <a href=""><i class="fa-brands fa-linkedin p-4" style={{fontSize:"30px" ,color:"#555555"}}></i></a>
                      <a href=""><i class="fa-brands fa-facebook p-4" style={{fontSize:"30px" ,color:"#555555"}}></i></a>
                        <a href=""><i class="fa-brands fa-twitter p-4" style={{fontSize:"30px" ,color:"#555555"}}></i></a>
                          <a href=""><i class="fa-brands fa-instagram p-4" style={{fontSize:"30px" ,color:"#555555"}}></i></a>
                            <a href=""><i class="fa-solid fa-phone p-4" style={{fontSize:"30px" ,color:"#555555"}}></i></a>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Footer