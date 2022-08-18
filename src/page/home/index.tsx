import React, { FC } from 'react';

// COMPONENTS
import CircularProgressWithLabel from 'components/circle-progress-bar';

const HomePage: FC = () => {
  return <CircularProgressWithLabel value={75} />;
};

export default HomePage;
