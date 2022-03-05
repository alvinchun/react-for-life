import './App.css';
import Items from './Items';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Items items={["A", "B", "C"]}/>
    </div>
  );
}

export default App;
