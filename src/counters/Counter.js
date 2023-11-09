import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import {
  increment,
  decrement,
  multiply,
  divide,
  reset,
  addInput,
} from "./counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.totalsCounter.count);
  const [inputAmnt, setInputAmnt] = useState(0);
  const dispatch = useDispatch();

  const addInputAmount = Number(inputAmnt) || 0;

  const resetCounter = () => {
    setInputAmnt(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>Total Count : {counter}</p>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Subtract</button>
      <button onClick={() => dispatch(multiply())}>Multiply</button>
      <button onClick={() => dispatch(divide())}>Divide</button>
      <div className="input">
        <label>Input Amount : </label>
        <input
          type="number"
          value={inputAmnt}
          onChange={(event) => setInputAmnt(event.target.value)}
        />
      </div>
      <div className="extra-buttons">
        <button onClick={() => dispatch(addInput(addInputAmount))}>
          Add Input Amount
        </button>
        <button onClick={resetCounter}>Reset Counter</button>
      </div>
    </section>
  );
};

export default Counter;
