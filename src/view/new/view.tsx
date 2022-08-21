import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

// REDUX
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getNews } from 'redux/news/actions';
import { selectNews } from 'redux/news/selectors';

// COMPONENTS
import MenuItem from 'components/molecules/menu';
import Button from 'components/atoms/button';
import Tag from 'components/atoms/tag';

// STYLES
import { ContentWrapper, TagWrapper, BlackBoxWrapper, Divider, BlackBoxTitle, BlackBoxSubTitle } from './styles';

const Menu: FC = () => {
  const { t: locale } = useTranslation('common');
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <Grid container rowGap={7}>
      <Grid item xs={12}>
        <Grid container columnSpacing={3}>
          <Grid item md={3} sm={6} xs={12}>
            <BlackBoxWrapper>
              <BlackBoxTitle>RECOMMENDED</BlackBoxTitle>
              <BlackBoxTitle>COLUMN</BlackBoxTitle>
              <Divider />
              <BlackBoxSubTitle>オススメ</BlackBoxSubTitle>
            </BlackBoxWrapper>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <BlackBoxWrapper>
              <BlackBoxTitle>RECOMMENDED</BlackBoxTitle>
              <BlackBoxTitle>DIET</BlackBoxTitle>
              <Divider />
              <BlackBoxSubTitle>ダイエット</BlackBoxSubTitle>
            </BlackBoxWrapper>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <BlackBoxWrapper>
              <BlackBoxTitle>RECOMMENDED</BlackBoxTitle>
              <BlackBoxTitle>BEAUTY</BlackBoxTitle>
              <Divider />
              <BlackBoxSubTitle>美容</BlackBoxSubTitle>
            </BlackBoxWrapper>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <BlackBoxWrapper>
              <BlackBoxTitle>RECOMMENDED</BlackBoxTitle>
              <BlackBoxTitle>HEALTH</BlackBoxTitle>
              <Divider />
              <BlackBoxSubTitle>健康</BlackBoxSubTitle>
            </BlackBoxWrapper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container columnSpacing={1} rowGap={4}>
          {news.map((v) => (
            <Grid key={v.id} item md={3} sm={6} xs={12}>
              <MenuItem date={v.date} image={v.image} />
              <ContentWrapper>{v.content}</ContentWrapper>
              <TagWrapper>
                {v.tags.map((tagItem) => (
                  <Tag key={tagItem} tag={tagItem} />
                ))}
              </TagWrapper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container item justifyContent="center" xs={12}>
        <Button>{locale('loadMoreNews')}</Button>
      </Grid>
    </Grid>
  );
};

export default Menu;
