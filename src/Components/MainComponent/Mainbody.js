import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import "./Mainbody.css";
// import Carousel1 from '../Carousel1';
import { Link } from 'react-router-dom';
// import Template from '../Template';
// import Template from '../Template';
const Mainbody=()=>{
  const[project,setProject]=useState(false);

  const handleProject = () =>{
    setProject(!project);
  }
    return(
        <>
        <div className='search'>
         <SearchBar style={{ width:'18rem',height:'2rem',border:'1px solid black'}} placeholder='Search Projects'/>
         <Link to="/newproject">
        <button className='buttons' onClick={handleProject}>+ New Project</button>
        </Link>
        {/* {project && (
          <Template handles={handleProject}/>
        )} */}
        </div>
      <div className='big'>
      <Link to="/newproject">
        <button className="small" >
         +
        </button>
        </Link>
    </div>
   </>
    )
   }
export default Mainbody;