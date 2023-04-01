import React, { useState } from "react";
import { My_api } from "./MyAPI";

export default function API() {
  const [data, setData] = useState(My_api);
  return (
    <>
      <h1>Let's learn how to deal with API's</h1>
      <table border={{}}>
        <th>Name</th>
        <th>Surname</th>
        <th>Age</th>
        <th>Email</th>
        {data.map((item) => {
          return (
            <tr>
              <th>{item.name}</th>
              <th>{item.surname}</th>
              <th>{item.age}</th>
              <th>{item.email}</th>
            </tr>
          );
        })}
      </table>
    </>
  );
}
