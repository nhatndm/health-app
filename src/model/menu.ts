import { BaseSlice } from './base';

export enum MenuWhenType {
  MORNING = 'MORNING',
  LUNCH = 'LUNCH',
  DINNER = 'DINNER',
  SNACK = 'SNACK'
}

export interface MenuItem {
  id: number;
  date: string;
  when: MenuWhenType;
  image: string;
}

export interface MenuSlice extends BaseSlice<MenuItem> {}
