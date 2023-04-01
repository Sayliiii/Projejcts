import React, { useState } from "react";

export default function Date_Time() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Let's display date & time</h1>
      <h2>Current Date is : {date}</h2>
      <h2>Current Time is : {time}</h2>
    </div>
  );
}
