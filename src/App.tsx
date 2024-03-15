import React from 'react';
import './App.scss';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Choose your option</h1>
      <Link to='exam'>first option</Link>
      <Link to='exam'>second option</Link>
    </div>
  );
}

export default App;
