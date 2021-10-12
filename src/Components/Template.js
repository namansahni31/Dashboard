import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Cards from './Cards';

import './Template.css';
// import './Carousel1.css';
const Template=(props)=>{
    return(
        <>
         <div className='cardss'>
          <div className='overlay2'>
            <div className='content2'>
                <div className='head'>
                <h1 >Choose your Template</h1>
                 <h5>Select a type of virtual space to collaborate</h5>
                </div>
         <Cards className='cd'/>
         <Cards className='cd'/>
         <Cards className='cd'/>
         <Cards className='cd'/>
       <div className='bottom'>
           <h5>Not sure ? <span style={{color:'#473BB1'}}>Explore all templates</span></h5>
           <button className='bt'>Next</button>
       </div>
    <CloseIcon className='close1' onClick={props.handle}/>
    </div>
    </div>
  </div>
   </>
    )
   }
export default Template;