import React, { FC } from 'react';
import { Grid } from '@mui/material';

// IMG
import MyBody from 'assets/images/mybody.jpg';
import MyExercise from 'assets/images/myexercise.jpg';
import MyDiary from 'assets/images/mydiary.jpg';

// COMPONENTS
import ImageCard from 'components/molecules/image-card';

// VIEW
import BodyRecord from 'view/body-record';
import MyExerciseRecord from 'view/exercise';
import MyDiaries from 'view/diaries';

// STYLES
import { MyRecordWrapper } from './styles';

const MyRecordPage: FC = () => {
  return (
    <MyRecordWrapper>
      <Grid container rowGap={5}>
        <Grid item xs={12}>
          <Grid container columnSpacing={4}>
            <Grid item md={4} xs={12}>
              <ImageCard img={MyBody} subTitle="自分のカラダの記録" title="BODY RECORD" />
            </Grid>
            <Grid item md={4} xs={12}>
              <ImageCard img={MyExercise} subTitle="自分の運動の記録" title="MY EXERCISE" />
            </Grid>
            <Grid item md={4} xs={12}>
              <ImageCard img={MyDiary} subTitle="自分の日記" title="MY DIARY" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <BodyRecord />
        </Grid>
        <Grid item xs={12}>
          <MyExerciseRecord />
        </Grid>
        <Grid item xs={12}>
          <MyDiaries />
        </Grid>
      </Grid>
    </MyRecordWrapper>
  );
};

export default MyRecordPage;
