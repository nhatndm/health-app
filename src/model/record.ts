import { BaseSlice } from './base';

export interface RecordItem {
  id: number;
  label: string;
  data: number;
}

export enum RecordType {
  WEEK = 'WEEK',
  DAY = 'DAY',
  MONTH = 'MONTH',
  YEAR = 'YEAR'
}

export interface RecordSlice extends BaseSlice<RecordItem> {
  type: RecordType;
}
