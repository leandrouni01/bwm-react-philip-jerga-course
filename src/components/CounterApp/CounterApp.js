

import React , {useState} from 'react';
import propTypes from 'prop-types';
import './CounterApp.css';


const CounterApp = (props) => {

  const [count, setCount] = useState(0);
  const { title } = props;

  const mutateCount = (step) => ()=> setCount(count + step);

  return (
    <div>
      <h2>Hello World</h2>
      <div className="counter-app">
        <h1>{title}</h1>
        <h2 className="value"> {count} </h2>
        <button onClick={mutateCount(-1)}>Decrement</button>
        <button onClick={mutateCount(1)}>Increment</button>
      </div>
    </div>
  )
}

CounterApp.propTypes = {
title: propTypes.string.isRequired
};

/*
class CounterApp extends React.Component {

  state = {
    count: 0
  }

  mutateCount = (step) => {
    this.setState({
      count: this.state.count + step
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
          <button onClick={() => this.mutateCount(-1)}>Decrement</button>
          <button onClick={() => this.mutateCount(1)}>Increment</button>
        </div>
      </div>
    )
  }
}*/

export default CounterApp;
