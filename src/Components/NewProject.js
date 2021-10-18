import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './NewProject.css';
import { Link } from 'react-router-dom';
const NewProject=(props)=>{
    return(
     <>
        <div className='enable1'>
           <div className='overlay1'>
            <div className='content1'>
            <h3>Choose a name for your Project</h3>
              <h1>Retail Experience Centre</h1>
               <Link to="/template">
               <button className='btnss'>Next</button>
               </Link>
              <CloseIcon className='close1' onClick={props.handles}/>
              </div>
            </div>
         </div>
   </>
    )
   }
export default NewProject;