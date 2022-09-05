import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import login_bg from "../../assests/login_bg.svg";
import "../styles/login.css"


const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    debugger
    return (
        <Grid container>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
            <div className="formContainer">
                <div>
                    <Typography variant="h1" align="center">
                        {/* <LockOutlinedIcon style={{ fontSize: "5rem" }} /> */}
                    </Typography>
                    <Typography variant="h4" align="center">
                        STAFF LOGIN
                    </Typography>
                    <form noValidate method="post">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={password}
                            label="Password"
                            onChange={handlePasswordChange}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                          
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </Grid>

            <Grid item xl={8} lg={8} md={6}>
                <div className="rightside">
                    {/* <Link to=""><img src={logo} className="loginLogo" alt="ispirithalei logo"
                        style={{ zIndex: "99", padding: "20px 0" }} /></Link> */}
                    <img src={login_bg} className="loginBgImage" alt="doctors" />
                </div>
            </Grid>
        
    </Grid>
    
     
    );
};

export default UserLogin;