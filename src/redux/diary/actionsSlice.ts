import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// MODEL
import { DiarySlice, DiaryItem } from 'model';

// ACTION TO CHANGE STATE
export const setManyDiaries: CaseReducer<DiarySlice, PayloadAction<DiaryItem[]>> = (state, action) => {
  state.data = action.payload;
};
