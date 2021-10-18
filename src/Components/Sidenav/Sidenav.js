import React, { useState } from 'react';
// import Nav from './Nav';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import image from "../../images/pexels.jpg";
import { Link } from 'react-router-dom';
import './Sidenav.css';
import Main from '../MainComponent/Main';
import Mainbody from '../MainComponent/Mainbody';
import SettingsIcon from '@mui/icons-material/Settings';
import Addteam from '../Addteam';
import Template from '../MainComponent/Template';
// import Template from '../MainComponent/Template';
// import { useState } from 'react';

const drawerWidth = 300;


const Sidenav=()=>{

  const[enable,setEnable]=useState(false);

  const handleEnable = () =>{
    setEnable(!enable);
  }
    return(
        <>
   <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            marginTop:'4rem',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <div className="side">
        <img src={image} style={{height:'100px',width:'100px',borderRadius:'50px'}}/>
        <h3 >Naman</h3>
        </div>
        <div className='sides'>
        <p>Designation - Project Manager</p>
        <p>Basic Subscription Plan - Active</p> 
        </div>
        <div className='inpt'>
        <button>Edit Your Profile</button>
        <Link to="/addteam">
        <button onClick={handleEnable}>Add team(Upto 5 memebrs)</button>
        </Link>
        </div>
        {/* {enable && (
          <Template handle={handleEnable}/>
        )} */}
        <button className='btns'>Upgrade Subscription plan</button>
        <SettingsIcon style={{marginTop:'6rem',marginLeft:'1rem'}}/>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
          <Main/>
          <hr/>
          <Mainbody/>
        {/* <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus.
        </Typography> */}
      </Box>
    </Box>
   </>
    )
   }
export default Sidenav;