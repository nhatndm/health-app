import React, { FC } from 'react';
import { Grid } from '@mui/material';

// COMPONENTS
import CircularProgressWithLabel from 'components/atoms/circle-progress-bar';

// STYLE
import { MyProgressWrapper } from './styles';

// VIEWS
import Menu from 'view/menu';
import Chart from 'view/chart';

const HomePage: FC = () => {
  return (
    <Grid container columnSpacing={0} rowGap={3}>
      <Grid item md={4} xs={12}>
        <MyProgressWrapper>
          <CircularProgressWithLabel value={75} />
        </MyProgressWrapper>
      </Grid>
      <Grid item md={8} xs={12}>
        <Chart />
      </Grid>
      <Grid item xs={12}>
        <Menu />
      </Grid>
    </Grid>
  );
};

export default HomePage;
