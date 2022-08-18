import { RootState } from 'redux/type';

// MODEL
import { ExerciseItem } from 'model';

export const selectManyExercises = (state: RootState): ExerciseItem[] => state.exercise.data;
