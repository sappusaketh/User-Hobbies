import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      {/* <h1>App</h1> */}
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
