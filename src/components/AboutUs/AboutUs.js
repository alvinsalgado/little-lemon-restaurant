import React from 'react';
import images from '../../utils/images';
import './AboutUs.scss';
const AboutUs = () => {
  return (
    <section className='about-section container'>
      <div className='about-info'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{' '}
        </p>
      </div>
      <div className='about-images'>
        <img className='about-image1' src={images.about2} alt='place' />
        <img className='about-image2' src={images.about1} alt='chef' />
      </div>
    </section>
  );
};

export default AboutUs;
