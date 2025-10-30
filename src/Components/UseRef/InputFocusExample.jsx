import React, { useState, useRef } from "react";

function CounterWithRef() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const inputRef = useRef(null); // create ref for input

  renderCount.current = renderCount.current + 1;

  const handleFocus = () => {
    // focus the input field using ref
    inputRef.current.focus();
  };

  const handleClear = () => {
    // clear input value directly using ref (no re-render)
    inputRef.current.value = "";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>🧠 useRef Example</h2>

      {/* Counter Section */}
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Rendered {renderCount.current} times</p>

      <hr />

      {/* Input Section */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{ padding: "8px", marginTop: "10px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleClear} style={{ marginLeft: "10px" }}>
          Clear Input
        </button>
      </div>
    </div>
  );
}

export default CounterWithRef;




