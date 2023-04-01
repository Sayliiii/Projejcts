import "./styles.css";
import React from "react";

export default function Date_Time() {
  const time = new Date().toLocaleTimeString();
  let greeting = "";
  if (time >= 1 && time < 12) {
    greeting = "Good Morning";
  } else if (time >= 13 && time < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return (
    <div className="greeting">
      <h1>
        Hello Sir, <span className="styling"> {greeting} </span>
      </h1>
    </div>
  );
}
