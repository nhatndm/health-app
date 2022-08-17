import React from 'react';

// ROUTES
import { AppRoute } from 'routes';

// LAYOUT
import Header from 'components/layout/header';

function App() {
  return (
    <>
      <Header />
      <AppRoute />
    </>
  );
}

export default App;
