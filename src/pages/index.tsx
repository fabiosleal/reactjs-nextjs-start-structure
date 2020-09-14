import React from 'react';
import Head from 'next/head';

import ProjectLogo from '../assets/logo-under-construction.svg';

import { Container } from 'styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <ProjectLogo />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure to quick start your project</p>
      </main>
    </Container>
  );
};

export default Home;
