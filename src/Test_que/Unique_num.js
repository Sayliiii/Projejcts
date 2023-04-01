import React, { useState } from "react";

export default function Unique_num() {
  const [input, setInput] = useState(0);
  const submit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <h2>Find unique Number</h2>
      <form onSubmit={submit}>
        <input
          type="number"
          placeholder="Enter number... "
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}
