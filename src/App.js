import React from 'react';
import './App.css';
import HeaderPastel from './components/HeaderPastel'
import MainPastel from './components/MainPastel'

function App() {
  return (
    <div className="App">
      <HeaderPastel className={"App-header"}/>
      <MainPastel className={"App-body"}/>
    </div>
  );
}

export default App;
