import React, { useState } from "react";

export default function Golden_num() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  function submit(e) {
    e.preventDefault();
    const split = input.split("").map(Number);
    console.log(split);
    let sum = split.reduce((acc, cur) => {
      acc = acc + cur;
      return acc;
    });
    console.log(sum);
    if (sum % 2 == 0) {
      console.log("Golden number");
    } else {
      console.log("Not a golden number");
    }
    setResult(input);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Golden number Program</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter number here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Click</button>
      </form>
      {/* {result && result % 2 == 0 ? <h2>Golden num</h2> : <h2>No Golden num</h2>} */}
      {/* <h2>{result}</h2> */}
    </div>
  );
}
