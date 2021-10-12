import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import "./Mainbody.css";
// import Carousel1 from '../Carousel1';
import Template from '../Template';
const Mainbody=()=>{
  const[project,setProject]=useState(false);

  const handleProject = () =>{
    setProject(!project);
  }
    return(
        <>
        <div className='search'>
         <SearchBar style={{ width:'18rem',height:'2rem',border:'1px solid black'}} placeholder='Search Projects'/>
        <button className='buttons' onClick={handleProject}>+ New Project</button>
        {project && (
          <Template handles={handleProject}/>
        )}
        </div>
      <div className='big'>
        <button className="small" >
         +
        </button>
    </div>
   </>
    )
   }
export default Mainbody;