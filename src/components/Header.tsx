import React from 'react'
import { AppBar, Toolbar,Typography } from '@mui/material'
import {logo} from "../constants/constant.js"

const Header:React.FC = () => {


  return (
    <AppBar position='static'>
       <Toolbar>
          <img src={logo} alt='logo' style={{width:"50px",height:"50px"}}/>
          <Typography variant='h5' marginLeft={3}>Note App</Typography>
          
       </Toolbar>
    </AppBar>
  )
}

export default Header
 