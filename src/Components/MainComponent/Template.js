import React from 'react';
// import CloseIcon from '@mui/icons-material/Close';
import Cards from './Cards';
import {Grid} from '@material-ui/core'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Template.scss';
// import './Template.css';
// import './Carousel1.css';
const Template=(props)=>{
    return(
        <>
         <div className='cardss'>
          <div className='overlay2'>
            <div className='content2'>
                <div >
                <h1 >Choose your Template</h1>
                 <h5>Select a type of virtual space to collaborate</h5>
                </div>
                <Grid container>
                  <Grid item xs={3}>
                  <Cards />
                    </Grid>
                    <Grid item xs={3}>
                  <Cards />
                    </Grid>
                    <Grid item xs={3}>
                  <Cards />
                    </Grid>
                    <Grid item xs={3}>
                  <Cards />
                    </Grid>
                    </Grid>
       <div >
           <h5>Not sure ? <span style={{color:'#473BB1'}}>Explore all templates</span></h5>
           <button className='bt'>Next</button>
       </div>
    <ArrowBackIcon className='close1' onClick={props.handle}/>
    </div>
    </div>
  </div>
   </>
    )
   }
export default Template;