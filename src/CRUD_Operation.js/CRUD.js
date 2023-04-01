import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CRUD_List() {
  const [data, setData] = useState([]);
  function getdate() {
    axios
      .get("https://6428021c161067a83b05024d.mockapi.io/CRUD")
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      });
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>List of Data</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {data.map((item) => {
          return (
            <>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
              ;
            </>
          );
        })}
      </table>
      <Link to="/">BackToAdd</Link>
    </div>
  );
}
