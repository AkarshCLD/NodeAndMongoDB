import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Login from './Login'
import Signup from "./Signup"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./Style.css"
const Nav = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            All in One Store
                        </Typography>
                        <Link className='Login' to="/Login" ><button className='btn_login'> Login </button></Link>
                        <Link className='Login' to="/Signup" ><button className='btn_login'>Signup</button></Link>
                    </Toolbar>
                </AppBar>
            </Box>

            <nav>



            </nav>



            <Routes>
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
            </Routes>



        </div>
    )
}

export default Nav

