import React, { FC } from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// STYLES
import { CircleProgressBarWrapper } from './styles';

const CircularProgressWithLabel: FC<CircularProgressProps & { value: number }> = (props) => {
  return (
    <CircleProgressBarWrapper>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress color="info" size={150} variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {`${Math.round(props.value)}%`}
        </Box>
      </Box>
    </CircleProgressBarWrapper>
  );
};

export default CircularProgressWithLabel;
