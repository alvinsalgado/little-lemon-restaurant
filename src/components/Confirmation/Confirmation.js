import React from 'react';
import './Confirmation.scss';
const Confirmation = ({ state }) => {
  return (
    <section className='container confirm-section'>
      <h2 className='confirm-heading'>Booking Confirmed</h2>
      <div className='confirm-box'>
        <div className='confirm-info'>
          <h5>Date</h5>
          <h3>{state.date}</h3>
        </div>
        <div className='confirm-info'>
          <h5>Time</h5>
          <h3>{state.time}</h3>
        </div>
        <div className='confirm-info'>
          <h5>Guests</h5>
          <h3>{state.guests}</h3>
        </div>
        <div className='confirm-info'>
          <h5>Occasion</h5>
          <h3>{state.occasion}</h3>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
