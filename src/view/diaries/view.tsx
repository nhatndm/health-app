import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

// REDUX
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getMyDiaries } from 'redux/diary/actions';
import { selectManyDiaries } from 'redux/diary/selectors';

// COMPONENTS
import DiaryItem from 'components/molecules/diary';
import Button from 'components/atoms/button';

// STYLES
import { TitleWrapper, ButtonWrapper } from './styles';

const View: FC = () => {
  const { t: locale } = useTranslation('common');
  const dispatch = useAppDispatch();
  const manyDiaries = useAppSelector(selectManyDiaries);

  useEffect(() => {
    dispatch(getMyDiaries());
  }, [dispatch]);

  return (
    <Grid container rowGap={1}>
      <Grid item xs={12}>
        <TitleWrapper>MY DIARY</TitleWrapper>
      </Grid>
      <Grid item xs={12}>
        <Grid container columnSpacing={2} rowGap={1}>
          {manyDiaries.map((v) => (
            <Grid key={v.id} item sm={3} xs={12}>
              <DiaryItem content={v.content} date={v.date} id={v.id} title={v.title} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={12}>
        <ButtonWrapper>
          <Button>{locale('loadMoreDiaries')}</Button>
        </ButtonWrapper>
      </Grid>
    </Grid>
  );
};

export default View;
