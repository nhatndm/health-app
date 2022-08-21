import React, { FC } from 'react';

// MODEL
import { DurationType } from 'model';

// STYLES
import {
  ExerciseItemWrapper,
  MainTitleWithDurationWrapper,
  MainTitleWrapper,
  DurationWrapper,
  UsedKcal,
  DotWrapper,
  TitleWithDotWrapper
} from './styles';

interface IProps {
  mainTitle: string;
  usedKcal: string;
  duration: string;
  durationType: DurationType;
}

const View: FC<IProps> = ({ mainTitle, usedKcal, duration, durationType }) => (
  <ExerciseItemWrapper>
    <TitleWithDotWrapper>
      <DotWrapper />
      <MainTitleWithDurationWrapper>
        <MainTitleWrapper>
          {mainTitle}
          <UsedKcal>{usedKcal}</UsedKcal>
        </MainTitleWrapper>
        <DurationWrapper>
          {duration} {durationType.toLowerCase()}
        </DurationWrapper>
      </MainTitleWithDurationWrapper>
    </TitleWithDotWrapper>
  </ExerciseItemWrapper>
);

export default View;
