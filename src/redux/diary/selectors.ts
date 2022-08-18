import { RootState } from 'redux/type';

// MODEL
import { DiaryItem } from 'model';

export const selectManyDiaries = (state: RootState): DiaryItem[] => state.diary.data;
