import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
// import HomeAbout from '../components/HomeAbout';
// import Products from '../components/Products';
// import Countup from '../components/Countup';

const Container = styled.div``;

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="Welcome to CafeCoffee" />

      <HomeHero />
      <Container>
        {/*
      <HomeAbout />
      <Products />
      <Gallery />
      <Countup /> */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
