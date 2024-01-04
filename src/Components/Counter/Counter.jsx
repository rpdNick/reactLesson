import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  function increnent() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  // Змінна стану
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(0);
  }

  return (
    <div className="counter_wrapper">
      <button onClick={decrement} className="button primary">-</button>
      <div className="count_value">{count}</div>
      <button onClick={increnent} className="button primary">+</button>
    </div>
  );
};

export default Counter;
