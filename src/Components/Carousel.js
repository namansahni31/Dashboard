import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
const Carousel=(props)=>{
    return(
        <>
     <div className='enable'>
          <div className='overlay'>
            <div className='content'>
              <h1>Add members to your team</h1>
              <h4>Send invites by adding email address of team members</h4>
              <div className='inputs'>
              <input className='text'></input>
              <input className='text'></input>
              <input className='text'></input>
              <input className='text'></input>
              <input className='text'></input>
              </div>
              <h5>Want to add more members?<span style={{color:'#473BB1'}}>Upgrade subscription plan</span></h5>
              <button className='buton'>Send Invitation</button>
              <h5><span style={{color:'#473BB1',alignSelf:'center'}}>Skip this step</span></h5>
              {/* <button className='close' onClick={props.handle}>Close</button> */}
              <CloseIcon className='close' onClick={props.handle}/>
              </div>
            </div>
          </div>
   </>
    )
   }
export default Carousel;