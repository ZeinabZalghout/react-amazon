import React from 'react'
import  './SubHeader.css'
import SubHeaderOption  from './SubHeaderOption'
function SubHeader() {
  return (
    <div className="subheader">
          <div className='subheader__left'>
           <div className="subheader__left__tool">
                <div className="subheader__left__tools">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
            
                <div className='all'><b>All</b></div>

           </div> 
           <div className='subheaderoptions'>
            <SubHeaderOption title="Today's Deals"/>    
               <SubHeaderOption title="Registry"/>
            <SubHeaderOption title="Buy Again"/>
            <SubHeaderOption title="Gift Cards"/>
            <SubHeaderOption title="Zeinab's...'Amazon.com"/>
            <SubHeaderOption title="Customer Service"/>
            <SubHeaderOption title= "Brwosing History"/>
      
            <SubHeaderOption title="Sell"/>
             </div>
          
        </div>
           
   </div>
  )
}

export default SubHeader