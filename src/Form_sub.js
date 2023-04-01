import React, { useState } from "react";
import axios from "axios";
export default function Form_sub() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "https://6426cf52d24d7e0de478d2e2.mockapi.io/Crud",
      data: {
        firstName: fname,
        lastName: lname
      }
    });
    if (fname.length === 0 || lname.length === 0) {
      setError(true);
    } else {
      setError(true);
    }
    console.log(`First name: ${fname} \nLast name: ${lname}`);
    alert("Form is submitted");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={submit}>
        <h1> Login Page 👩‍💻</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />{" "}
        {error && fname.length <= 3 ? (
          <span style={{ color: "red" }}> ** Not valid</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        {error && lname.length <= 3 ? (
          <span style={{ color: "red" }}> ** Not valid</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <button type="submit">Submit ☝</button>
      </form>
    </div>
  );
}

// import React, { useState } from "react";

// export default function Form_sub() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(false);

//   const submit = (e) => {
//     e.preventDefault();
//     if (fname === 0 && lname === 0 && email === 0) {
//       setError(false);
//     } else {
//       setError(true);
//     }
//     console.log(fname, lname, email);
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Login Form</h1>
//       <form onSubmit={submit}>
//         <input
//           type="text"
//           placeholder="Enter ur name"
//           onChange={(e) => setFname(e.target.value)}
//         />
//         {error && fname.length <= 3 ? (
//           <span style={{ color: "red" }}> ** Not valid</span>
//         ) : (
//           ""
//         )}
//         <br />
//         <br />
//         <input
//           type="text"
//           placeholder="Enter ur surname"
//           onChange={(e) => setLname(e.target.value)}
//         />
//         {error && lname.length <= 3 ? (
//           <span style={{ color: "red" }}> ** Not valid</span>
//         ) : (
//           ""
//         )}
//         <br />
//         <br />
//         <input
//           type="email"
//           placeholder="Enter ur email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {error && email.length <= 3 ? (
//           <span style={{ color: "red" }}> ** Not valid</span>
//         ) : (
//           ""
//         )}
//         <br />
//         <br />
//         <button type="submit">Submit form</button>
//       </form>
//     </div>
//   );
// }
