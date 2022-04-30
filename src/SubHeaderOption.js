import React from 'react'
import './SubHeaderOption.css'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';

function SubHeaderOption({title}) {
  let message;
     if (title === "Brwosing History"){
       message=(
          <div  className='subheaderoption1'>
         <div className='options1'>{title}
         <ArrowDropDownSharpIcon className='arow'/>
       </div>
       </div>
        )
      
     }
     else{
          message=(
           <div className='subheaderoption'>
             <div className='options'>{title}</div>
             </div>
             )
         
        }

     
   return (
    <div>
     {message}
     </div>   
  )








}

export default SubHeaderOption