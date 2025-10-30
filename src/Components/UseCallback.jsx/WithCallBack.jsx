import React, { useState, useCallback } from "react";

function WithCallBack() {
  const [count, setCount] = useState(0);

  // useCallback keeps the same function instance unless dependencies change
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}

export default WithCallBack;
