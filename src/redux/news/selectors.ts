import { RootState } from 'redux/type';

// MODEL
import { NewItem } from 'model';

export const selectNews = (state: RootState): NewItem[] => state.new.data;
