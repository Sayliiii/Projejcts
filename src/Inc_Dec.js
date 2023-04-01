import React, { useState } from "react";

export default function Inc_Dec() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2> Increment & Decrement Program</h2>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setNum(num - 1)}>Decrement</button>
      <h1>{num}</h1>
    </div>
  );
}
