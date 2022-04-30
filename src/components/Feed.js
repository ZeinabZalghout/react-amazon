import React, { useState } from 'react'
import './Feed.css'


function Feed({feeditems,photo}) {
  return (
    <div className='container1'>
        <div className="feed">
            <div className="card" >
             {feeditems.map((feed,index)=>(
        
         
               <div className="feed__headers"  key={index}>
                   {feed}
              </div> 
            ))}
            
           
          
            </div>
               <div className="feed__body" >
            {photo.map((item,index)=>{return(
             <div key={index}><img src={item}/></div>
         
          )})}
            
              </div>
 
      
      
   
    
    </div>
     </div>
  )
}

export default Feed