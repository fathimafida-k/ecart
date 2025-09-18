import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/slices/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col } from 'react-bootstrap';



function Home() {
  const dispatch=useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  console.log(allProducts,loading,error);
  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  return (
    <div>
      <Header insideHome={true}/>
 {loading ? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> :
    <Row >
     { allProducts.length>0 ? 
           (allProducts.map(pro=>( 
            <Col lg={4} className='mb-5 '>
          

        <Card style={{ width: '18rem' , borderRadius:"15px",marginLeft:"2rem",marginTop:"3rem",border:"1px solid #c2b9b9ff", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)"}}>
      <Card.Img variant="top" src={pro.thumbnail} />
      <Card.Body>
        <Card.Title style={{fontFamily:"Playfair Display" ,color:"#2C2C2C",fontSize:"1.3rem",textAlign:"center"}}>{pro.title}</Card.Title>
       <div style={{textAlign:"center"}}>
         <Link className='btn fw-bold' style={{backgroundColor:"#9B8AFB",borderRadius:"25px",color:"white"}} to={`/view/product/${pro.id}`} >View More</Link>
       </div>
      </Card.Body>
    </Card></Col>
  ))): 
<h2 style={{fontFamily:"Playfair Display",fontSize:"2.2rem",fontWeight:"bold",color:'#3f3f3f77',textAlign:"center"}}>Oops!! <br />No Products Found</h2>
      }
   
    </Row>
  }
    </div>
  )
}

export default Home