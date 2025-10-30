import React, { useState, useCallback, memo } from "react";

const Child = memo(({ onLike }) => {
  console.log("Child rendered ✅");
  return <button onClick={onLike}>Like Post</button>;
});

function Parent() {
  const [likes, setLikes] = useState(0);

  // useCallback memoizes the function until dependencies change
  const handleLike = useCallback(() => {
    console.log("Post Liked!");
  }, []); // No dependencies → function never recreated

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Likes: {likes}</h2>
      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increase Likes
      </button>
      <br />
      <Child onLike={handleLike} />
    </div>
  );
}

export default Parent;



// --------------------------------------------------------------------

// import React, { useState } from "react";

// function Child({ onLike }) {
//   console.log("Child rendered ❌");
//   return <button onClick={onLike}>Like Post</button>;
// }

// function Parent() {
//   const [likes, setLikes] = useState(0);

//   // Function re-created on every render
//   const handleLike = () => {
//     console.log("Post Liked!");
//   };

//   return (
//     <div>
//       <h2>Likes: {likes}</h2>
//       <button onClick={() => setLikes(likes + 1)}>Increase Likes</button>
//       <Child onLike={handleLike} />
//     </div>
//   );
// }

// export default Parent;


