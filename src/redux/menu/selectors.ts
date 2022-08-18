import { RootState } from 'redux/type';

// MODEL
import { MenuItem } from 'model';

export const selectMenus = (state: RootState): MenuItem[] => state.menu.data;
