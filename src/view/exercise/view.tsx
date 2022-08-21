import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';

// REDUX
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getMyExercises } from 'redux/exercises/actions';
import { selectManyExercises } from 'redux/exercises/selectors';

// COMPONENTS
import ExerciseItem from 'components/molecules/exercise';

// STYLES
import { ExerciseWrapper, TitleWrapper, MainTitle, DateWrapper } from './styles';

const View: FC = () => {
  const dispatch = useAppDispatch();
  const manyExercises = useAppSelector(selectManyExercises);

  useEffect(() => {
    dispatch(getMyExercises());
  }, [dispatch]);

  return (
    <ExerciseWrapper>
      <Grid container columnSpacing={5} rowGap={1}>
        <Grid item xs={12}>
          <TitleWrapper>
            <MainTitle>MY EXERCISE</MainTitle>
            <DateWrapper>2021.05.21</DateWrapper>
          </TitleWrapper>
        </Grid>
        {manyExercises.map((v) => (
          <Grid key={v.id} item sm={6} xs={12}>
            <ExerciseItem
              duration={`${v.duration}`}
              durationType={v.durationType}
              mainTitle={v.course}
              usedKcal={`${v.kcalUsed}kcal`}
            />
          </Grid>
        ))}
      </Grid>
    </ExerciseWrapper>
  );
};

export default View;
