
import React , { useEffect } from "react";

const CounterView = (props) => {

const {countValue, handleIncrement} = props;

useEffect(() => {
  console.log("Effect hook used");
},[countValue]);

  // Use effect works as the lifecicle functions of a class component and is called at start and when 
  // any of the states in the passed array are changed

  return (
    <div>
      <h2 className="value"> {countValue} </h2>
      <button onClick={handleIncrement(-1)}>Decrement</button>
      <button onClick={handleIncrement(1)}>Increment</button>
    </div>
  );
};

export default CounterView;
