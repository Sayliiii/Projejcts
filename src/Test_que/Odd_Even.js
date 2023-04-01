import React, { useState } from "react";

export default function Old_Even() {
  const [input, setInput] = useState(0);
  const [odd, setOdd] = useState(0);
  const [even, setEven] = useState(0);

  function submit(e) {
    e.preventDefault();
    console.log(input);
    const split = input.split("").map(Number);
    console.log(split);
    let odd = split.filter((item) => {
      if (item % 2 !== 0) {
        return item;
      }
    });
    console.log(odd);
    setOdd(odd);

    let even = split.filter((item) => {
      if (item % 2 == 0) {
        return item;
      }
    });
    console.log(even);
    setEven(even);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Find Old and Even number</h2>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter number here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
      <h2
        style={{
          border: "2px solid black",
          padding: "2px",
          backgroundColor: "yellow"
        }}
      >
        Odd Numbers count is : {odd.length}
      </h2>
      <h2
        style={{
          border: "2px solid black",
          padding: "2px",
          backgroundColor: "pink"
        }}
      >
        Even Numbers count is : {even.length}
      </h2>
    </div>
  );
}
