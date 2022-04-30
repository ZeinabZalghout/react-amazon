import React from 'react'
import {Link} from "react-router-dom"


import "./Product.css";
function Product({products}) {
  return (

    <div className='productelement' >

  {products.map((product)  =>{
  return( 
  
  <div className="card" key={product.id}>
   
    <div className="product">
    <div className="product__headers">
      {product.title}
    </div>
     <div className="product__body">
      {product.image}
    </div>
    <div className="product_foot">
     <Link to='./detail' className='link'>{product.link}</Link>
    </div>
    </div>
  </div>
   
 


     )})} 
    
 </div>
  );
}

export default Product