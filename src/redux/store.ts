import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// REDUCER
import appReducer from './app/slice';

export const reducer = combineReducers({
  app: appReducer
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});
