// src/components/layout/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Nav';
import Footer from '../components/layout/Footer';
// import Aside from './Aside';
import { styled } from '@mui/material/styles';

const LayoutContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const HeaderContainer = styled('header')({
  flex: '0 0 auto',
});

// const AsideContainer = styled('aside')({
//   flex: '0 0 auto',
// });

const MainContainer = styled('main')({
  flex: '1 1 auto',
  padding: '16px',
});

const FooterContainer = styled('footer')({
  flex: '0 0 auto',
});

const Layout = () => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      {/* <AsideContainer>
        <Aside />
      </AsideContainer> */}

      <MainContainer>
        <Outlet />
      </MainContainer>

      <FooterContainer style={{marginTop:"2rem"}}>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  );
};

export default Layout;
