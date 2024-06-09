// src/components/layout/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const PREFIX = 'Header';

const classes = {
  root: `${PREFIX}-root`,
  menuButton: `${PREFIX}-menuButton`,
  title: `${PREFIX}-title`,
  link: `${PREFIX}-link`
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
  },
  [`& .${classes.title}`]: {
    flexGrow: 1,
  },
  [`& .${classes.link}`]: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Header = () => (
  <Root className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Resume App
        </Typography>
        <Button color="inherit">
          <Link to="/" className={classes.link}>Home</Link>
        </Button>
        <Button color="inherit">
          <Link to="/about" className={classes.link}>About</Link>
        </Button>
        <Button color="inherit">
          <Link to="/contact" className={classes.link}>Contact</Link>
        </Button>
        <Button color="inherit">
          <Link to="/signin" className={classes.link}>Login</Link>
        </Button>
      </Toolbar>
    </AppBar>
  </Root>
);

export default Header;
