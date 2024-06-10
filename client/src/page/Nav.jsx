import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import Logo from '../assets/Logo.png'
const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={Logo} alt="Resume_Logo" style={{ width: '60px', height: 'auto' }} />
              {/* YourLogo */}
            </Link>
          </Typography>

          {/* Login and Register Links */}
          <div>
            <Button color="inherit" component={Link} to="/signin" style={{ textDecoration: 'none' }}>
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup" style={{ textDecoration: 'none' }}>
              Register
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
