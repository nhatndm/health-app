import { BaseSlice } from './base';

export interface DiaryItem {
  id: number;
  date: string;
  title: string;
  content: string;
}

export interface DiarySlice extends BaseSlice<DiaryItem> {}
