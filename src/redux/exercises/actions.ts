import { exerciseSlice } from './slice';

// TYPE
import { AppThunk } from 'redux/type';

// MOCK DATA
import { MockExercises } from 'data';

const { setManyExercises } = exerciseSlice.actions;

const getMyExercises = (): AppThunk => async (dispatch) => {
  const exercisesRes = MockExercises;

  dispatch(setManyExercises(exercisesRes));
};

export { getMyExercises };
