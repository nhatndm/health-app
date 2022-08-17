import React from 'react';

// ROUTES
import { AppRoute } from 'routes';

// LAYOUT
import Header from 'components/layout/header';

// STYLES
import { ContainerWrapper } from './App.styles';

function App() {
  return (
    <>
      <Header />
      <ContainerWrapper>
        <AppRoute />
      </ContainerWrapper>
    </>
  );
}

export default App;
