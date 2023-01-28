import React, { useState, useReducer } from 'react';
import updateTimes from '../../reducers/times_reducer';
import { fetchAPI } from '../temp';
import './BookingForm.scss';
const BookingForm = ({ handleConfirmation }) => {
  const initialTime = {
    available: fetchAPI(new Date()),
  };

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTime);

  function handleChange(event) {
    const { name, value, type } = event.target;
    if (type === 'date') {
      dispatch({ type: 'DATE', date: value });
    }
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setErrorMsg('');
    const allFieldsEntered = Object.keys(formData).every(
      (key) => formData[key].trim() !== ''
    );
    if (allFieldsEntered) {
      handleConfirmation(formData);
    } else {
      setErrorMsg('All the fields are required.');
    }
  }
  return (
    <section className='container form-section'>
      <h2>Reserve Table</h2>
      {errorMsg && (
        <h1 className='alert' data-testid='alert'>
          {errorMsg}
        </h1>
      )}
      <form
        className='box'
        onSubmit={handleSubmit}
        aria-label='reservation information'
      >
        <label htmlFor='res-date'>Choose date</label>
        <input
          className='form-control'
          type='date'
          id='res-date'
          value={formData.date}
          onChange={handleChange}
          name='date'
          data-testid='currentDate'
          // required
        />

        <label htmlFor='res-time'>Choose time</label>
        <div
          className={!formData.time ? 'custom-select invalid' : 'custom-select'}
        >
          <select
            id='res-time '
            value={formData.time}
            onChange={handleChange}
            name='time'
            // required
          >
            <option value=''>Available Times</option>
            {availableTimes.available.map((time, index) => (
              <option key={index} value={time} data-testid='currentTime'>
                {time}
              </option>
            ))}
          </select>
        </div>

        <label htmlFor='guests'>Number of guests</label>
        <input
          className='form-control'
          type='number'
          placeholder='1'
          min='2'
          max='10'
          id='guests'
          value={formData.guests}
          onChange={handleChange}
          name='guests'
          // required
        />
        <label htmlFor='occasion'>Occasion</label>
        <div className='custom-select'>
          <select
            id='occasion'
            value={formData.occasion}
            onChange={handleChange}
            name='occasion'
            // required
          >
            <option value=''>Please Select Occasion</option>

            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
          </select>
        </div>
        <button
          className='submit-btn'
          // disabled={
          //   !formData.date ||
          //   !formData.time ||
          //   !formData.guests ||
          //   !formData.occasion
          // }
        >
          Make Your reservation
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
