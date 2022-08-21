import React, { FC } from 'react';

// STYLES
import { ImageCardOverlay, ImageCardWrapper, SubTitleWrapper, MainTitleWrapper } from './styles';

interface IProps {
  img: string;
  title: string;
  subTitle: string;
}

const View: FC<IProps> = ({ img, title, subTitle }) => (
  <ImageCardWrapper backgroundImage={img}>
    <ImageCardOverlay />
    <MainTitleWrapper>{title}</MainTitleWrapper>
    <SubTitleWrapper>{subTitle}</SubTitleWrapper>
  </ImageCardWrapper>
);

export default View;
