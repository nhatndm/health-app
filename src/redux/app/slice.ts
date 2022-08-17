import { createSlice } from '@reduxjs/toolkit';

// DOMAIN
import { Domain } from 'constant';

// INTERFACE
import { App } from 'model';

// ACTION SLICE
import { setAuthentication } from './actionsSlice';

export const initialState: App = {
  isAuthenticated: false
};

export const appSlice = createSlice({
  name: Domain.App,
  initialState,
  reducers: {
    setAuthentication
  }
});

// REDUCER
export default appSlice.reducer;
