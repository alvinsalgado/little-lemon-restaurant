import React from 'react';
import './TestimonialCard.scss';
import images from '../../utils/images';

const TestimonialCard = ({ id, name, rating, review, image }) => {
  return (
    <div className='testimonial-card' key={id}>
      <div className='testimonial-rating'>
        <h5>Rating</h5>
        {[...Array(rating)].map((_, index) => {
          return (
            <img key={index} className='star' src={images.star} alt='star' />
          );
        })}
      </div>
      <div className='testimonial-heading'>
        <img className='testimonial-image' src={image} alt='' />
        <h5>{name}</h5>
      </div>
      <h5 className='testimonial-review'>{review}</h5>
    </div>
  );
};

export default TestimonialCard;
