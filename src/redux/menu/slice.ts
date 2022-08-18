import { createSlice } from '@reduxjs/toolkit';

// DOMAIN
import { Domain } from 'constant';

// INTERFACE
import { MenuSlice } from 'model';

// ACTION SLICE
import { setMenu } from './actionsSlice';

export const initialState: MenuSlice = {
  data: []
};

export const menuSlice = createSlice({
  name: Domain.Menu,
  initialState,
  reducers: {
    setMenu
  }
});

// REDUCER
export default menuSlice.reducer;
