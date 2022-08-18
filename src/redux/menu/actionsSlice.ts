import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// MODEL
import { MenuSlice, MenuItem } from 'model';

// ACTION TO CHANGE STATE
export const setMenu: CaseReducer<MenuSlice, PayloadAction<MenuItem[]>> = (state, action) => {
  state.data = action.payload;
};
