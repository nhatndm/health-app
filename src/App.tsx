import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

function App() {
  const { t: locale } = useTranslation(['common']);

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>{locale('home')}</p>
        <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
