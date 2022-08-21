import React, { FC } from 'react';

// MODEL
import { DiaryItem } from 'model';

// STYLES
import { DiaryWrapper, TitleWrapper, MainTitleWrapper, ContentWrapper } from './styles';

interface IProps extends DiaryItem {}

const View: FC<IProps> = ({ date, title, content }) => (
  <DiaryWrapper>
    <TitleWrapper>{date}</TitleWrapper>
    <MainTitleWrapper>{title}</MainTitleWrapper>
    <ContentWrapper>{content}</ContentWrapper>
  </DiaryWrapper>
);

export default View;
