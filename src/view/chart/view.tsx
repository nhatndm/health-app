import React, { FC, useEffect, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartWrapper } from './styles';
import { useLocation } from 'react-router-dom';

// CONSTANT
import { Router } from 'constant';

// MODEL
import { RecordType } from 'model';

// REDUX
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getMyRecords } from 'redux/record/actions';
import { selectRecordLabel, selectRecordData, selectRecordType } from 'redux/record/selectors';

ChartJS.register(CategoryScale, Filler, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface IProps {
  customHeight?: number;
  color?: string;
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { display: false },
    x: {
      ticks: { color: '#fff' }
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

const View: FC<IProps> = ({ customHeight, color }) => {
  const dispatch = useAppDispatch();
  const labels = useAppSelector(selectRecordLabel);
  const recordsData = useAppSelector(selectRecordData);
  const recordType = useAppSelector(selectRecordType);
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    if (pathName === Router.Home) {
      dispatch(getMyRecords(RecordType.DAY));
    } else {
      dispatch(getMyRecords(recordType));
    }
  }, [dispatch, recordType, pathName]);

  const data = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: 'My record',
          data: recordsData,
          borderColor: '#8FE9D0'
        }
      ]
    };
  }, [labels, recordsData]);

  return (
    <ChartWrapper color={color} height={customHeight}>
      <Line data={data} options={options} />
    </ChartWrapper>
  );
};

export default View;
