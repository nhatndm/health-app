import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// MODEL
import { App } from 'model';

// ACTION TO CHANGE STATE
export const setAuthentication: CaseReducer<App, PayloadAction<boolean>> = (state, action) => {
  state.isAuthenticated = action.payload;
};
