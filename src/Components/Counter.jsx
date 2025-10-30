import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(10); // initialize state first

  useEffect(() => {
    console.log(`Use effect Count changed to: ${count}`);
  }, [count]); // runs whenever 'count' changes

  const sample = () => {
    console.log("function trigger");
  };
sample()
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <button onClick={sample}>Trigger Sample</button> */}
    </div>
  );
}

export default Counter;
