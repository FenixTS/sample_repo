import React, { useState, useEffect } from "react";

function RefDomManipulationWithoutRef() {
  const [count, setCount] = useState(0);

  // Count re-renders manually
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, [count]);

  const handleFocus = () => {
    const input = document.getElementById("myInput");
    const heading = document.getElementById("myHeading");

    if (input) {
      input.focus(); // Focus input field
    }

    if (heading) {
      heading.style.color = "blue"; // Change heading color
    }

    console.log("🎯 Focus & Highlight button clicked");
  };

  const handleClear = () => {
    const input = document.getElementById("myInput");
    if (input) {
      input.value = "";
      input.placeholder = "Input cleared!";
    }

    console.log("🧹 Input cleared");
  };

  const handleChangeBox = () => {
    const box = document.getElementById("myBox");
    if (box) {
      box.style.backgroundColor = "lightgreen";
      box.style.transform = "scale(1.1)";
      box.innerText = "Box Changed! 🎨";
    }
    console.log("🎨 Box changed");
  };

  const handleResetBox = () => {
    const box = document.getElementById("myBox");
    if (box) {
      box.style.backgroundColor = "lightgray";
      box.style.transform = "scale(1)";
      box.innerText = "Original Box 🧩";
    }
    console.log("🔄 Box reset");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 id="myHeading">🧠 DOM Manipulation Without useRef Example</h2>

      {/* Counter Section */}
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Rendered {renderCount} times</p>

      <hr />

      {/* Input Section */}
      <input
        id="myInput"
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

      {/* Box Section */}
      <div
        id="myBox"
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

export default RefDomManipulationWithoutRef;
