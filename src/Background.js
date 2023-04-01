import React, { useState } from "react";

export default function Digital_Clock() {
  const [color, setColor] = React.useState("purple");
  const [msg, setMsg] = useState("Click");
  const get_color = () => {
    let getColor = "pink";
    setColor(getColor);
    setMsg("Done 😀");
  };
  return (
    <>
      <h1 style={{ backgroundColor: color }}>
        {" "}
        Let's change background color{" "}
      </h1>
      <button onClick={get_color}>
        {msg}
        {/* {"\u2728"} */}
      </button>
    </>
  );
}
