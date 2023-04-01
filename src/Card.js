// import React from "react";
// export default function Card(props) {
//   return (
//     // <div className="card">
//     //   <h1>NetFlix</h1>
//     //   <div>
//     //     <img src={taza} alt="img1" width="100" />
//     //     <div>
//     //       <span>Netflix original series</span>
//     //       <h3>Taza Khabar</h3>
//     //       <button>Watch Now</button>
//     //     </div>
//     //   </div>
//     // </div>

//     <div>
//       <h1>NetFlix</h1>
//       <div className="cards">
//         <div className="card">
//           <img src={props.imgsrc} alt="img1" width="100" />
//           <div>
//             <span>{props.title}</span>
//             <h3>{props.sname}</h3>
//             <a href={props.link} target="_blank" rel="noopener noreferrer">
//               <button style={{ cursor: "pointer" }}>Watch Now</button>{" "}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
export default function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="img1" width="100" />
        <div>
          <span>{props.title}</span>
          <h3>{props.sname}</h3>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button style={{ cursor: "pointer" }}>Watch Now</button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
