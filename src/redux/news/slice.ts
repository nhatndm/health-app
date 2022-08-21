import { createSlice } from '@reduxjs/toolkit';

// DOMAIN
import { Domain } from 'constant';

// INTERFACE
import { NewSlice } from 'model';

// ACTION SLICE
import { setNews } from './actionsSlice';

export const initialState: NewSlice = {
  data: []
};

export const newSlice = createSlice({
  name: Domain.New,
  initialState,
  reducers: {
    setNews
  }
});

// REDUCER
export default newSlice.reducer;
