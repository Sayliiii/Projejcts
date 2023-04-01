import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CRUD_Navbar() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const history = useNavigate();
  const nameref = useRef();
  const emailref = useRef();
  function submit(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://6428021c161067a83b05024d.mockapi.io/CRUD",
      data: {
        name: name,
        email: email
      }
    });
    history("/list");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>CRUD operation</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        ref={nameref}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        ref={emailref}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="button" onClick={submit} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
