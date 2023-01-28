import React from 'react';
import { fetchAPI } from '../components/temp';
const times_reducer = (state, action) => {
  if (action.type === 'DATE') {
    return {
      ...state,
      available: fetchAPI(new Date(action.date)),
    };
  }
};

export default times_reducer;
