// import Card from "./Card";
// import taza from "./img/taza.jpg";
// import shots from "./img/shots.jpg";
// import alien from "./img/alien.jpg";
// import data from "./Card_data";
import Navbar from "./CRUD_Operation.js/Navbar";
import CRUD from "./CRUD_Operation.js/CRUD";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    // Card App
    // <div className="App">
    //   <h1 style={{ color: "red", textAlign: "center" }}> Top Web Series</h1>
    //   <Card
    //     imgsrc={taza}
    //     title="Netflix original series"
    //     sname="Taza Khabar"
    //     link="https://www.youtube.com/watch?v=97ozjepH31Y"
    //   />
    //   <Card
    //     imgsrc={alien}
    //     title="Netflix original series"
    //     sname="My Girlfriend is Alien "
    //     link="https://www.youtube.com/watch?v=4QcHHal-pt4&list=PLH-SXxGRMYLfH9UCiPAHKePf4UAJc6c_Q"
    //   />{" "}
    //   <Card
    //     imgsrc={taza}
    //     title="Netflix original series"
    //     sname="Taza Khabar"
    //     link="https://www.youtube.com/watch?v=97ozjepH31Y"
    //   />
    //   <Card
    //     imgsrc={shots}
    //     title="Netflix original series"
    //     sname="Four More Shots Please"
    //     link="https://www.youtube.com/watch?v=D7NCW8gMtVs"
    //   />
    // </div>

    <div style={{ textAlign: "center" }}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/list" element={<CRUD />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
