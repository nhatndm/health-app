import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// MODEL
import { NewSlice, NewItem } from 'model';

// ACTION TO CHANGE STATE
export const setNews: CaseReducer<NewSlice, PayloadAction<NewItem[]>> = (state, action) => {
  state.data = action.payload;
};
