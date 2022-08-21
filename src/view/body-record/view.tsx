import React, { FC } from 'react';
import { Grid } from '@mui/material';

// COMPONENT
import Chart from 'view/chart';

// REDUX
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setRecordType } from 'redux/record/actions';
import { selectRecordType } from 'redux/record/selectors';

// MODEL
import { RecordType as RecordTypeModel } from 'model';

// STYLES
import { BodyRecordWrapper, TitleWrapper, RecordType, RecordTypeWrapper, MainTitle, DateWrapper } from './styles';

const recordTypes = [
  {
    title: '日',
    value: RecordTypeModel.DAY
  },
  {
    title: '週',
    value: RecordTypeModel.WEEK
  },
  {
    title: '月',
    value: RecordTypeModel.MONTH
  },
  {
    title: '年',
    value: RecordTypeModel.YEAR
  }
];

const View: FC = () => {
  const dispatch = useAppDispatch();
  const selectedRecordType = useAppSelector(selectRecordType);

  return (
    <BodyRecordWrapper>
      <Grid container rowGap={1}>
        <Grid item xs={12}>
          <TitleWrapper>
            <MainTitle>BODY RECORD</MainTitle>
            <DateWrapper>2021.05.21</DateWrapper>
          </TitleWrapper>
        </Grid>
        <Grid item xs={12}>
          <Chart color="#414141" customHeight={185} />
        </Grid>
        <Grid item xs={12}>
          <RecordTypeWrapper>
            {recordTypes.map((v) => (
              <RecordType
                key={v.value}
                active={v.value === selectedRecordType}
                onClick={() => dispatch(setRecordType(v.value))}
              >
                {v.title}
              </RecordType>
            ))}
          </RecordTypeWrapper>
        </Grid>
      </Grid>
    </BodyRecordWrapper>
  );
};

export default View;
