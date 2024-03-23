// export async function fetchHello() {
//     try {
//       const response = await fetch('http://localhost:8000/hello');
//       const data = await response.text();
//       console.log(response.data); // Output: Hello
//     } catch (error) {
//       console.error(error);
//     }
    
  
//   }
// 'use client'  

// import React from "react";
// import axios from "axios";
// import './anroute.css'

// function Anroute() {
    
//     const press = async () => {
//         try {
//           const response = await axios.post('http://localhost:8000/hello', {}, {
//             headers: {
//               'Access-Control-Allow-Origin': 'http://localhost:3000',
//               'Content-Type': 'application/json',
//             },
//           });
//           console.log(response.data);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//     return(
//         <div>
//             <div className="inp">
//                 <input type="button" onClick={press} value="hello" />
//             </div>
//         </div>
//     )
// }

// export default Anroute;
