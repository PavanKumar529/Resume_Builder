import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'orange', padding: '2rem 0', marginTop: '2rem' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              YourLogo
            </Typography>
            <Typography variant="body2" color="textSecondary">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="/about" color="inherit" underline="none">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="/team" color="inherit" underline="none">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" color="inherit" underline="none">
                  Careers
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="/contact" color="inherit" underline="none">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" color="inherit" underline="none">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/faq" color="inherit" underline="none">
                  FAQ
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
