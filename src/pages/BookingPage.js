import React, { useState, useReducer } from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../components/temp';

const BookingPage = () => {
  const navigate = useNavigate();

  function handleConfirmation(data) {
    if (submitAPI(data)) {
      navigate('/confirmed', { state: { ...data } });
    }
  }
  return (
    <div>
      <BookingForm handleConfirmation={handleConfirmation} />
    </div>
  );
};

export default BookingPage;
