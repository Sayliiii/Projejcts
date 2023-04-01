import { useState } from "react";

export default function CRUD() {
  const My_api = [
    {
      id: 1,
      name: "Sayli",
      surname: "Patil",
      age: 27,
      email: "abc@gmail.com"
    },
    {
      id: 2,
      name: "Prisha",
      surname: "Mhatre",
      age: 2.6,
      email: "pqr@gmail.com"
    },
    {
      id: 3,
      name: "Prasad",
      surname: "Mhatre",
      age: 32,
      email: "xyz@gmail.com"
    }
  ];

  const [input, setInput] = useState(My_api);
  function handle_delete(item) {
    setInput(input.splice(1));
    alert(`${item.name} is deleted`);
  }
  return (
    <div>
      <h1>CRUD Operation in react</h1>
      {input.map((item) => {
        return (
          <li>
            {item.name}
            <button onClick={() => handle_delete(item)}>❌</button>
          </li>
        );
      })}
    </div>
  );
}
