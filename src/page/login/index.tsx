import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

// ROUTER
import { Router } from 'constant';

// COMPONENTS
import Button from 'components/button';

// HOOKS
import { useAppDispatch } from 'hooks/redux';

// REDUX
import { login } from 'redux/app/actions';

// STYLE
import { LoginWrapper } from './styles';

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const { t: locale } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = useCallback(() => {
    dispatch(
      login(() => {
        const previousPath = (location.state as any)?.from?.pathname;

        if (previousPath) {
          return navigate(previousPath, { replace: true });
        }

        navigate(Router.Home, { replace: true });
      })
    );
  }, [dispatch, navigate, location]);

  return (
    <LoginWrapper>
      <Button onClick={handleLogin}>{locale('clickHereToLogin')}</Button>
    </LoginWrapper>
  );
};

export default LoginPage;
