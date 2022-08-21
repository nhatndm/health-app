import { BaseSlice } from './base';

export enum DurationType {
  SECOND = 'SEC',
  MINUTES = 'MIN',
  HOUR = 'HOUR'
}

export interface ExerciseItem {
  id: number;
  course: string;
  duration: number;
  durationType: DurationType;
  kcalUsed: number;
}

export interface ExerciseSlice extends BaseSlice<ExerciseItem> {}
