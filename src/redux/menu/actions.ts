import { menuSlice } from './slice';

// TYPE
import { AppThunk } from 'redux/type';

// MOCK DATA
import { MockMenuItems } from 'data';

const { setMenu } = menuSlice.actions;

const getMenu = (): AppThunk => async (dispatch) => {
  const menuRes = MockMenuItems;

  dispatch(setMenu(menuRes));
};

export { getMenu };
