import React from 'react';
import './App.css';
import Post from './components/post';
import { Reply } from './components/reply/Reply';
import GlobalStyle from './GlobalStyle';
import { NavBar } from './components/NavBar'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <NavBar />
      </div>
    </>
  );
}

export default App;
