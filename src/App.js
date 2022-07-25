import React from 'react';

import './App.css';
import PrimeReact from 'primereact/api';


function App() {
  PrimeReact.ripple = true;
  
  return (
    <div className="App">
      Home
    </div>
  );
}

export default App;
