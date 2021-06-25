import React from 'react';
import web from './image/hero-img.svg';
import Comman from './Comman';
const Home = () => {
  return (
    <>
      <Comman
        name='Grow Your Bussiness with'
        imgsrc={web}
        visit='/service'
        btnname='Get Started'
      />
    </>
  );
};
export default Home;
