import React, { FC } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// HELPERS
import { getValue } from 'helpers';

// ROUTE
import { Router } from 'constant';

// PAGE
import HomePage from 'page/home';
import LoginPage from 'page/login';

const RequireAuth: FC<{ children: JSX.Element }> = ({ children }) => {
  let location = useLocation();
  const accessToken = getValue('@access-token');

  if (!accessToken) return <Navigate replace state={{ from: location }} to={Router.Login} />;

  return children;
};

export const AppRoute: FC = () => {
  return (
    <Routes>
      <Route
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
        path={Router.Home}
      />
      <Route element={<LoginPage />} path={Router.Login} />
    </Routes>
  );
};
