// import axios from 'axios';

// export async function POST(Payload) {
//   try {
//     const response = await axios.post('https://fastapi-rlx1.onrender.com/user', Payload);

//     if (!response.status === 200) {
//       throw new Error('Request failed with status ' + response.status);
//     }

//     const data = response.data;

//     return data;
//   } catch (error) {
//     console.error(error);

//     // Return the error message as a fallback
//     return 'Internal server error';
//   }
// }


// // import { NextResponse } from 'next/server';

// // // forces to not cache the response to get a different age every request
// // export const dynamic = 'force-dynamic';

// // export async function POST(Payload) {
// //   try {
// //     const response = await fetch('http://127.0.0.1:8000/user', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify(Payload)
// //     });
// //     console.log("ok")

// //     if (!response.ok) {
// //       throw new Error('Request failed with status ' + response.status);
// //     }

// //     const user_data = await response.json();

// //     return NextResponse.json({
// //       creds: user_data.creds,
// //       age: user_data.age,
// //       dage: user_data.dage,
// //       info: user_data.info
// //     });
// //   } catch (error) {
// //     console.error(error);

// //     return NextResponse.json({
// //       message: 'Internal server error'
// //     }, {
// //       status: 500
// //     });
// //   }
// // }
