import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// TYPE
import { RootState } from './type';

export const reducer = combineReducers({});

export const initialAppState: Omit<RootState, 'router'> = {};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});
