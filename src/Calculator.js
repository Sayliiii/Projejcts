import React from "react";

export default function Calculator() {
  function add(num1, num2) {
    return num1 + num2;
  }
  function sub(num1, num2) {
    return num1 - num2;
  }
  function mul(num1, num2) {
    return num1 * num2;
  }
  function div(num1, num2) {
    return num1 / num2;
  }
  return (
    <div>
      <h1>Add of two num is: {add(20, 10)} </h1>
      <h1>Sub of two num is: {sub(20, 10)}</h1>
      <h1>Mul of two num is: {mul(20, 10)}</h1>
      <h1>Div of two num is: {div(20, 10)} </h1>
    </div>
  );
}
