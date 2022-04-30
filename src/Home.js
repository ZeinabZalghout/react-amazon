import React,{useState,useEffect}from 'react'
import './Home.css';
import Header from './Header'
import SubHeader from './SubHeader'
import Slider from './slider'
import Product from './components/Product/Product'
import product1 from './components/images/banner1.jpg'
import product2 from './components/images/banner2.jpg'
import product3 from './components/images/banner3.jpg'
import product4 from './components/images/banner4.jpg'
import {products1} from './components/ProductData'

function Home() {
      const banner=[product1,product2,product3,product4];
  const [products, setproducts] = useState([])
 useEffect(() => {
 setproducts(products1)

}, [])
  return (
 <div className="home">
      
    <div className="container">
           <Header/>
     <SubHeader/>
     <Slider images={banner}/>
     <Product products={products}/>
   

  
    </div>
    </div>
  )
}

export default Home