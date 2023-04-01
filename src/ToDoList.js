import React, { useState } from "react";

export default function ToDoList() {
  const [input, setInput] = useState("");
  const [addtodo, setAddtodo] = useState([]);
  const [error, setError] = useState(false);

  //  ++++++ function for adding items in list
  const additem = () => {
    const updated = [...addtodo, input];
    setAddtodo(updated);
    setInput("");
    if (input.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  //  ++++++ function for deleting items from list
  const deleteitem = (index) => {
    console.log(index);
    const deleteitems = addtodo.filter((item, i) => {
      return i !== index;
    });
    setAddtodo(deleteitems);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "purple" }}>To Do List</h1>
      <input
        type="text"
        placeholder="Enter here...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && input.length <= 0 ? (
        <div style={{ color: "orange" }}> ** Enter valid data</div>
      ) : null}

      <button onClick={additem}>➕</button>
      {addtodo.map((item, i) => {
        return (
          <li key={i}>
            {item}
            <button onClick={() => deleteitem(i)}>❌</button>
          </li>
        );
      })}
    </div>
  );
}

// import React, { useState } from "react";

// export default function ToDoList() {
//   const [input, setInput] = useState("");
//   const [list, setList] = useState([]);

//   const addItem = () => {
//     const updated = [...list, input];
//     setList(updated);
//     setInput("");
//   };
//   function handle_delete() {
//     setList(input.slice(1));
//   }
//   return (
//     <div>
//       <h2>List</h2>
//       <input
//         type="text"
//         placeholder="Enter here..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addItem}>Add</button>
//       <h1>
//         {list}
//         {list && <button onClick={handle_delete}>delete</button>}
//       </h1>
//     </div>
//   );
// }
