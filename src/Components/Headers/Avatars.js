import React from 'react';
import {IconButton,Box,makeStyles,Button,Menu,MenuItem,Badge,Avatar} from "@material-ui/core";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import image from "../../images/pexels.jpg";
// const useStyles = makestyles((theme)=>({}))
const Avatars=()=>{
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
          <Box >
          <Button
          
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<Avatar src={image} sx={{width:10, height: 10}}></Avatar>}>
        {/* <Badge badgeContent={3} color="secondary"> */}
         {/* <NotificationsIcon /> */}
        {/* </Badge> */}
      </Button>
      <Menu
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
      </Menu>
          </Box>
   </>
    )
   }
export default Avatars;