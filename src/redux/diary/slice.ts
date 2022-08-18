import { createSlice } from '@reduxjs/toolkit';

// DOMAIN
import { Domain } from 'constant';

// INTERFACE
import { DiarySlice } from 'model';

// ACTION SLICE
import { setManyDiaries } from './actionsSlice';

export const initialState: DiarySlice = {
  data: []
};

export const diarySlice = createSlice({
  name: Domain.Diary,
  initialState,
  reducers: {
    setManyDiaries
  }
});

// REDUCER
export default diarySlice.reducer;
