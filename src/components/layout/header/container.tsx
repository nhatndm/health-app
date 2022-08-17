import React, { FC } from 'react';

// VIEW
import View from './view';

// HOOKS
import { useAppSelector } from 'hooks/redux';

// REDUX
import { isAuthenticated } from 'redux/app/selectors';

const Container: FC = () => {
  const loggedIn = useAppSelector(isAuthenticated);

  return <View isAuthenticated={loggedIn} />;
};

export default Container;
