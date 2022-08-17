import React, { FC } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// ROUTE
import { Router } from 'constant';

// HOOKS
import { useAppSelector } from 'hooks/redux';

// REDUX
import { isAuthenticated } from 'redux/app/selectors';

// PAGE
import HomePage from 'page/home';
import LoginPage from 'page/login';
import NewsPage from 'page/news';
import MyRecordPage from 'page/myrecord';

const RequireAuth: FC<{ children: JSX.Element }> = ({ children }) => {
  let location = useLocation();
  const loggedIn = useAppSelector(isAuthenticated);

  if (!loggedIn) return <Navigate replace state={{ from: location }} to={Router.Login} />;

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
      <Route
        element={
          <RequireAuth>
            <NewsPage />
          </RequireAuth>
        }
        path={Router.News}
      />
      <Route
        element={
          <RequireAuth>
            <MyRecordPage />
          </RequireAuth>
        }
        path={Router.MyRecord}
      />
      <Route element={<LoginPage />} path={Router.Login} />
    </Routes>
  );
};
