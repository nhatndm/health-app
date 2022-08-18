import { createSlice } from '@reduxjs/toolkit';

// DOMAIN
import { Domain } from 'constant';

// INTERFACE
import { ExerciseSlice } from 'model';

// ACTION SLICE
import { setManyExercises } from './actionsSlice';

export const initialState: ExerciseSlice = {
  data: []
};

export const exerciseSlice = createSlice({
  name: Domain.Exercise,
  initialState,
  reducers: {
    setManyExercises
  }
});

// REDUCER
export default exerciseSlice.reducer;
