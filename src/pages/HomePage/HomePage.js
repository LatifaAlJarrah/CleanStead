import React from 'react'

import { Banners } from './components/Banners/Banners';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { PageContainer } from '../../component/PageContainer';
import { Reviews } from './components/Reviews';

const HomePage = () => {
  return (
    <PageContainer>
      <Banners />
      <Services />
      <Advantages />
      <Reviews />
    </PageContainer>
  );
}

export default HomePage;

