import React ,{useState}from 'react'
import './Header.css'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FaSearch from '@mui/icons-material/Search';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import {Link} from "react-router-dom";
import { Us } from "react-flags-select";
import Amazon from "./components/banner/Amazon_Logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
      const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }
  return (
      <div className='header__elements'>
<div className="header">

  {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>choose your location</h2>
             
            </header>
            <div className='modal__body'>
            <main className="modal__main">
              <p>Delivery options  and delivery speeds may vary for defferents locations</p>
            </main>

            <div className='address'>
              Manage address  book    
            </div>

            <div className="hr">
               <hr/>or enter a US zip code <hr/>
            </div>

             <div className="text">
             <input type="text"/>
             <button>Apply</button>
             </div>

            <div className="hr">
               <hr className='hr1'/>or<hr className='hr1'/>  
            </div>
          <div className="list">
            <select className='list-item'>
              <option>Lebanon</option>
            </select>
          </div>
          <button className='btn1'>Done</button>

             </div>
        
           
          </div>
        </>
      )}
        
        <img className='amazon' src={Amazon}/>
    <div className="btn2">  
    <button className='btn' onClick={openModal}>
             <div className='iconlocation'><FmdGoodOutlinedIcon/></div>
             <div className='icon'>
               <div className='deliver'>Deliver to </div>
             <div className='lebanon'>Lebanon</div></div>
        </button></div>
       
         <div className="header__left">
        
        <div className="header__search">
          <select>
            <option>
            Easter
            </option>
               <option>
           All Departement
            </option>
          </select>
          <input type="text" placeholder="Search" />
          <div className='search__icon'>
            <p>
              <FaSearch />
              </p>
          </div>

        </div>
      </div>
    
      <div className="header__right">
          <div className='header__flag'>
           <div className="flag"> <Us /></div>
           <ArrowDropDownSharpIcon/>
         
           </div>
     
            <div className="account">
            <div>Hello Zeinab zalg...</div>
            <div className='account1'><b>Account & Lists </b></div>
            </div>

              <div className="account2">
                <div>Returns</div>
                 <div className='account1'><b>&Orders</b></div>
                </div>
           
            <div className="cart">
     
         <div className='shopping'>
                
                      </div>
              <div className="count"><ShoppingCartIcon/></div>
        
         </div>

     </div>
         </div>
       </div>
  )
}

export default Header