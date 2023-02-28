import React from 'react'
import { Routes, Route, Link, useHistory } from "react-router-dom"
import Login from './Login'
import Signup from "./Signup"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import "./Style.css"
import Home from './Home';
const Nav = () => {

    const signupbtn = () => {

    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            All in One Store
                        </Typography>
                        <Link className='Login' to="/Login" ><button className='btn_login'> Login </button></Link>
                        <Link className='Login' to="/Signup" ><button className='btn_login' onClick={signupbtn} >Signup</button></Link>
                    </Toolbar>
                </AppBar>
            </Box>

            <nav>



            </nav>



            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
            </Routes>



        </div>
    )
}

export default Nav

