import { RootState } from 'redux/type';

export const isAuthenticated = (state: RootState): boolean => state.app.isAuthenticated;
