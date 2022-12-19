import React from 'react';
import './App.css';
import { Reply } from './components/reply/Reply';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Reply />
      </div>
    </>
  );
}

export default App;
