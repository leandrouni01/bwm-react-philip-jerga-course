

import React , {useState} from 'react';
import './CounterApp.css';

/*
const CounterApp = () => {

  const [count, setCount] = useState(0);
  /* this is the same as writing this:
  * const stateArray = useState(0);
  * const count = stateArray[0];
  * const setCount = stateArray[1];
  *


  const mutateCount = (step) => ()=> setCount(count + step);

  return (
    <div>
      <h2>Hello World</h2>
      <div className="counter-app">
        <h1 className="value">
          {count}
        </h1>
        <button onClick={mutateCount(-1)}>Decrement</button>
        <button onClick={mutateCount(1)}>Increment</button>
      </div>
    </div>
  )
}*/

class CounterApp extends React.Component {

  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <div className="counter-app">
          <h1 className="value">
            {this.state.count}
          </h1>
          <button onClick={this.decrementCount}>Decrement</button>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      </div>
    )
  }
}

export default CounterApp;