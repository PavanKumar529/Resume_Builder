import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
// import Navbar from './Nav'; // Ensure you import your Navbar component correctly
// import Footer from '../components/layout/Footer'; // Import Footer component if you have one

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with form submission
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* <Box display="flex" flexDirection="column" minHeight="100vh"> */}
        <Container maxWidth="xs" style={{ marginTop: '5rem', flexGrow: 1 }}>
          <Paper elevation={8} style={{ padding: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    error={!!emailError}
                    helperText={emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                    error={!!passwordError}
                    helperText={passwordError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Typography align="center" style={{ marginTop: '1rem' }}>
              Don't have an account? <Link to="/signup" style={{ color: '#3f51b5' }}>Register</Link>
            </Typography>
          </Paper>
        </Container>
        {/* <Box mt="auto">
          <Footer />
        </Box> */}
      {/* </Box> */}
    </>
  );
};

export default LoginForm;
