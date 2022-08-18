import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// REDUCER
import appReducer from './app/slice';
import diaryReducer from './diary/slice';
import exerciseReducer from './exercises/slice';
import recordReducer from './record/slice';
import menuReducer from './menu/slice';

export const reducer = combineReducers({
  app: appReducer,
  diary: diaryReducer,
  exercise: exerciseReducer,
  record: recordReducer,
  menu: menuReducer
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});
