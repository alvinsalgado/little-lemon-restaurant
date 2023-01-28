import React from 'react';
import { useLocation } from 'react-router-dom';
import Confirmation from '../components/Confirmation/Confirmation';
const ConfirmedBooking = () => {
  const location = useLocation();
  console.log(location);
  return <Confirmation {...location} />;
};

export default ConfirmedBooking;
