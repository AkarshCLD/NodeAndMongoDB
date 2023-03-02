import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from './Footer';
import { NavLink, useNavigate } from 'react-router-dom';
// import { Navigate } from "react-router-dom"
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [store, setStore] = useState([])
    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setStore([...store, { ...data }])
        setData({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })

        const { firstName, lastName, email, password } = data
        if (firstName && lastName && email && password) {
            axios.post("http://localhost:7010/signup", data)
            .then((res) => { alert(res.data.msg); navigate("/login"); })
            // .then((res) => { alert(res.data.msg, "please login now"); })
                .catch((res) => {
                    alert(res.data.msg)
                })

        }
        else {
            alert("Invalid or does not exits")
        }

    };


    return (
        <>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>

                    {/* // form */}
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={handlechange}
                                    autoComplete="given-name"
                                    name="firstName"
                                    value={data.firstName}
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={handlechange}
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    value={data.lastName}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handlechange}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={data.email}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handlechange}
                                    required
                                    fullWidth
                                    name="password"
                                    value={data.password}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <NavLink to="/Login">
                                    <Link variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>




                </Box>

            </Container>


            <div>
                <Footer sx={{ mt: 19, mb: 4, fontSize: 25 }} />

            </div>
        </>

    );
}

export default SignUp