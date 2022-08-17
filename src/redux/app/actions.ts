import { appSlice } from './slice';

// TYPE
import { AppThunk } from 'redux/type';

const { setAuthentication } = appSlice.actions;

const login =
  (callback: () => void): AppThunk =>
  async (dispatch) => {
    dispatch(setAuthentication(true));

    callback();
  };

export { setAuthentication, login };
