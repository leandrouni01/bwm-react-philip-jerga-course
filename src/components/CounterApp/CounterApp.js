

import React from 'react';
import './CounterApp.css';

const CounterApp = () => {
    return (
    <div className="counter-app">
      <h1 className="value">
        0
      </h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  ) 
}

export default CounterApp;