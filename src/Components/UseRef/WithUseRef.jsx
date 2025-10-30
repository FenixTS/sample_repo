import React, { useState, useRef } from "react";

function RefDomManipulationExample() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const inputRef = useRef(null);
  const headingRef = useRef(null);
  const boxRef = useRef(null);

  // Count how many times component rendered
  renderCount.current = renderCount.current + 1;

  const handleFocus = () => {
    inputRef.current.focus(); // focus input field
    headingRef.current.style.color = "blue"; // change heading color
  };

  const handleClear = () => {
    inputRef.current.value = ""; // clear input value
    inputRef.current.placeholder = "Input cleared!"; // change placeholder
  };

  const handleChangeBox = () => {
    boxRef.current.style.backgroundColor = "lightgreen";
    boxRef.current.style.transform = "scale(1.1)";
    boxRef.current.innerText = "Box Changed! 🎨";
  };

  const handleResetBox = () => {
    boxRef.current.style.backgroundColor = "lightgray";
    boxRef.current.style.transform = "scale(1)";
    boxRef.current.innerText = "Original Box 🧩";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 ref={headingRef}>🧠 useRef DOM Manipulation Example</h2>

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
        <button onClick={handleFocus}>Focus & Highlight</button>
        <button onClick={handleClear} style={{ marginLeft: "10px" }}>
          Clear Input
        </button>
      </div>

      <hr />

      {/* DOM Manipulation Box */}
      <div
        ref={boxRef}
        style={{
          margin: "20px auto",
          width: "200px",
          height: "100px",
          backgroundColor: "lightgray",
          lineHeight: "100px",
          borderRadius: "10px",
          transition: "all 0.3s ease",
        }}
      >
        Original Box 🧩
      </div>
      <button onClick={handleChangeBox}>Change Box</button>
      <button onClick={handleResetBox} style={{ marginLeft: "10px" }}>
        Reset Box
      </button>
    </div>
  );
}

export default RefDomManipulationExample;
