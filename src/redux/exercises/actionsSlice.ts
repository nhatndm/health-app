import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// MODEL
import { ExerciseSlice, ExerciseItem } from 'model';

// ACTION TO CHANGE STATE
export const setManyExercises: CaseReducer<ExerciseSlice, PayloadAction<ExerciseItem[]>> = (state, action) => {
  state.data = action.payload;
};
