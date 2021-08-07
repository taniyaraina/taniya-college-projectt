import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved

import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
// import HomeAbout from '../components/HomeAbout';
// import Products from '../components/Products';
// import Countup from '../components/Countup';
import Testimonials from '../components/Testimonials';
import Seo from '../components/Seo';

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
      <Testimonials />
      </Container>
    </Layout>
  );
};

export default IndexPage;
