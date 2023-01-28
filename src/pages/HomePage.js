import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import Hero from '../components/Hero/Hero';
import Specials from '../components/Specials/Specials';
import Testimonials from '../components/Testimonials/Testimonials';
import { specials, testimonials } from '../utils/data';
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Specials {...specials} />
      <Testimonials {...testimonials} />
      <AboutUs />
    </div>
  );
};

export default HomePage;
