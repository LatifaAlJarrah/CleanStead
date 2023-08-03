import React from 'react'

import { SectionOne } from '../component/SectionOne';
import { SectionTwo } from '../component/SectionTwo';
import { SectionThree } from '../component/SectionThree';
import { PageContainer } from '../component/PageContainer';
import { SectionFour } from '../component/SectionFour';

const HomePage = () => {
  return (
    <PageContainer>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </PageContainer>
  );
}

export default HomePage;

