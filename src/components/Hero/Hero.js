import React from 'react';
import Button from '../Button/Button';
import images from '../../utils/images';
import './Hero.scss';
const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-wrapper container'>
        <div className='hero-intro'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='hero-paragraph'>
            We are a family owned mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button text='Reserve a Table' to='/reservation' />
        </div>

        <img className='image-hero' src={images.heroImage} alt='food' />
      </div>
    </section>
  );
};

export default Hero;
