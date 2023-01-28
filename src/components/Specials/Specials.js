import React from 'react';
import Button from '../Button/Button';
import images from '../../utils/images';
import './Specials.scss';
const Specials = ({ title, cards }) => {
  return (
    <section className='container'>
      <div className='specials-heading'>
        <h2 className='specials-title'>{title}</h2>
        <Button text='Online menu' to='/' />
      </div>
      <div className='specials-cards-container '>
        {cards.map((specials) => {
          const { id, title, price, body, image } = specials;
          return (
            <div key={id} className='specials-card'>
              <img className='specials-img' src={image} alt='product' />
              <div className='specials-card-info'>
                <div className='specials-card-heading'>
                  <h3 className='specials-title'>{title}</h3>
                  <h4 className='specials-price'>{price}</h4>
                </div>
                <h6 className='specials-body'>{body}</h6>
                <div className='specials-order'>
                  <h4>Order a delivery</h4>
                  <img src={images.bike} alt='bike' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Specials;
