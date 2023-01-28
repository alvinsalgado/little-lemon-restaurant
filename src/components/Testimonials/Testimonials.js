import React from 'react';

import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.scss';
const Testimonials = ({ title, cards }) => {
  return (
    <section className='testimonial-section'>
      <div className='container'>
        <h2 className='testimonial-title'>{title}</h2>
        <div className='testimonial-cards-container '>
          {cards.map((testimonials) => {
            return <TestimonialCard {...testimonials} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
