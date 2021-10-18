import React from 'react';
import {IconButton,Box,makeStyles,Button,Menu,MenuItem,Badge,Avatar} from "@material-ui/core";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import image from "../../images/pexels.jpg";
import Avatars from "./Avatars";
import Icon1 from "../../images/logo1.png";
import { ClassNames } from '@emotion/react';
const useStyles = makeStyles((theme)=>({
  icons:{
    margin:"5px"
  }
}))
const Nav=()=>{
  const classes=useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static" style={{backgroundColor:'#333333',height:'4rem'}}>
        <Toolbar>
        {/* <Typography sx={{ flexGrow: 1 }}> */}
            <img src={Icon1}  />
          {/* </Typography> */}
          <Box >
          <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
        style={{float:'right'}}>
        <Badge  color="secondary" >
         <NotificationsIcon />
        </Badge>
        <p>&nbsp;&nbsp;</p>
        <Avatars/>
      </IconButton>
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
          </Box>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      </Box>
   </>
    )
   }
export default Nav;