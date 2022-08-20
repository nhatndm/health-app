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

// REDUX
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getMyRecords } from 'redux/record/actions';
import { selectRecordLabel, selectRecordData, selectRecordType } from 'redux/record/selectors';

ChartJS.register(CategoryScale, Filler, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
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

const View: FC = () => {
  const dispatch = useAppDispatch();
  const labels = useAppSelector(selectRecordLabel);
  const recordsData = useAppSelector(selectRecordData);
  const recordType = useAppSelector(selectRecordType);

  useEffect(() => {
    dispatch(getMyRecords(recordType));
  }, [dispatch, recordType]);

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
    <ChartWrapper>
      <Line data={data} options={options} />
    </ChartWrapper>
  );
};

export default View;
