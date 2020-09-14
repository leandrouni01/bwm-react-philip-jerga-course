

import React , {useState} from 'react';
import './CounterApp.css';

const CounterApp = () => {

  const [count, setCount] = useState(0);
  /* this is the same as writing this:
  * const stateArray = useState(0);
  * const count = stateArray[0];
  * const setCount = stateArray[1];
  */


  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Hello World</h2>
      <div className="counter-app">
        <h1 className="value">
          {count}
        </h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  ) 
}

export default CounterApp;