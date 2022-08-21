import { BaseSlice } from './base';

export interface NewItem {
  id: number;
  date: string;
  content: string;
  image: string;
  tags: string[];
}

export interface NewSlice extends BaseSlice<NewItem> {}
