import { useState } from "react";

export default function Digital_Clock() {
  const time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const get_time = () => {
    const time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  return (
    <>
      <h1>Let's create digital clock {ctime}</h1>
      <button onClick={get_time}>Click</button>
    </>
  );
}
