// src/components/layout/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { styled } from '@mui/material/styles';

const LayoutContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100vh',
  gridTemplateAreas: `
    "header header"
    "aside main"
    "footer footer"
  `,
});

const HeaderContainer = styled('header')({
  gridArea: 'header',
});

const AsideContainer = styled('aside')({
  gridArea: 'aside',
});

const MainContainer = styled('main')({
  gridArea: 'main',
  padding: '16px',
});

const FooterContainer = styled('footer')({
  gridArea: 'footer',
});

const Layout = () => {
  return (
    <LayoutContainer>
      
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <AsideContainer>
        <Aside />
      </AsideContainer>

      <MainContainer>
        <Outlet />
      </MainContainer>

      <FooterContainer>
        <Footer />
      </FooterContainer>

    </LayoutContainer>
  );
};

export default Layout;
