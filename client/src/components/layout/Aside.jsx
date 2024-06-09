import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const AsideContainer = styled(Box)({
  marginTop: '3rem',
});

const AsideLink = styled(Button)({
  display: 'block',
  marginBottom: '3rem',
  padding: '0.5rem',
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  textAlign: 'left',
});

function Aside() {
  return (
    <AsideContainer>
      <AsideLink component={Link} to="/create-resume" variant="contained" color="primary">
        Create Resume
      </AsideLink>
      <AsideLink component={Link} to="/view-resume" variant="contained" color="primary">
        View Resume
      </AsideLink>
      <AsideLink component={Link} to="/update-resume" variant="contained" color="primary">
        Update Resume
      </AsideLink>
      {/* <AsideLink component={Link} to="/signin" variant="contained" color="primary">
        Login
      </AsideLink> */}
    </AsideContainer>
  );
}

export default Aside;
