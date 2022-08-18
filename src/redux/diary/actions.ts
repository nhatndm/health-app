import { diarySlice } from './slice';

// TYPE
import { AppThunk } from 'redux/type';

// MOCK DATA
import { MockDiaries } from 'data';

const { setManyDiaries } = diarySlice.actions;

const getMyDiaries = (): AppThunk => async (dispatch) => {
  const diariesRes = MockDiaries;

  dispatch(setManyDiaries(diariesRes));
};

export { getMyDiaries };
