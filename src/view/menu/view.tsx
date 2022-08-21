import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

// REDUX
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getMenu } from 'redux/menu/actions';
import { selectMenus } from 'redux/menu/selectors';

// LOGO
import { ReactComponent as KnifeLogo } from 'assets/svg/knife.svg';
import { ReactComponent as SnackLogo } from 'assets/svg/coffee-15.svg';

// COMPONENTS
import MenuItem from 'components/molecules/menu';
import Hexagon from 'components/atoms/hexagon';
import Icon from 'components/atoms/icon';
import Button from 'components/atoms/button';

const Menu: FC = () => {
  const { t: locale } = useTranslation('common');
  const dispatch = useAppDispatch();
  const menus = useAppSelector(selectMenus);

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  return (
    <Grid container rowGap={3}>
      <Grid item xs={12}>
        <Grid container columnSpacing={1} rowGap={1}>
          <Grid container item justifyContent="center" sm={3} xs={6}>
            <Hexagon>
              <Icon nonFlex IconComponent={KnifeLogo} />
              Morning
            </Hexagon>
          </Grid>
          <Grid container item justifyContent="center" sm={3} xs={6}>
            <Hexagon>
              <Icon nonFlex IconComponent={KnifeLogo} />
              Lunch
            </Hexagon>
          </Grid>
          <Grid container item justifyContent="center" sm={3} xs={6}>
            <Hexagon>
              <Icon nonFlex IconComponent={KnifeLogo} />
              Dinner
            </Hexagon>
          </Grid>
          <Grid container item justifyContent="center" sm={3} xs={6}>
            <Hexagon>
              <Icon nonFlex IconComponent={SnackLogo} />
              Snack
            </Hexagon>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container columnSpacing={1} rowGap={1}>
          {menus.map((v) => (
            <Grid key={v.id} item md={3} sm={6} xs={12}>
              <MenuItem date={v.date} image={v.image} when={v.when} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={12}>
        <Button>{locale('loadMoreRecords')}</Button>
      </Grid>
    </Grid>
  );
};

export default Menu;
