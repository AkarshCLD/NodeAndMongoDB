import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from './Footer';
import { NavLink, useNavigate } from 'react-router-dom';
// import { unstable_HistoryRouter } from 'react-router-dom';
import axios from 'axios';
const Login = ({setLoginUser}) => {

    const navigate = useNavigate();
    // const history = unstable_HistoryRouter();
    // console.log(history);
    const [logindata, setLogindata] = useState({
        email: "",
        password: ""
    })
    const [storelogin, setStorelogin] = useState([]);

    const handleChange = (e) => {
        setLogindata({ ...logindata, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setStorelogin([{ ...logindata }])

        setLogindata({
            email: "",
            password: ""
        })
        // console.log(logindata)


        const { email, password } = logindata
        if (email && password) {
            axios.post("http://localhost:7010/login", logindata)
            .then((res) => { alert(res.data.msg, "this is a fetch data");  setLoginUser(res.data.user); navigate("/"); })
                // history.push("/Signup")

        }
        else {
            alert(console.log("allert"))
        }

    };


    return (

        <>
        {/* {console.log(user)} */}
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
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={handleChange}
                            value={logindata.email}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        // autoFocus
                        />
                        <TextField
                            onChange={handleChange}
                            value={logindata.password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                           
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <NavLink to="/Signup">
                                    <Link variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>


            </Container>

            <div>
                <Footer sx={{ mt: 22, mb: 4, fontSize: 25 }} />
            </div>

        </>

    );
}

export default Login;