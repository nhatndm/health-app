import { newSlice } from './slice';

// TYPE
import { AppThunk } from 'redux/type';

// MOCK DATA
import { MockNews } from 'data';

const { setNews } = newSlice.actions;

const getNews = (): AppThunk => async (dispatch) => {
  const newRes = MockNews;

  dispatch(setNews(newRes));
};

export { getNews };
