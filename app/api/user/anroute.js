import axios from "axios";


export async function fetchHello() {
  const url = "http://localhost:8000/hello";
  try {
    const response = await axios.get('http://localhost:8000/hello');
    const data = response;
    console.log(data); // Output: Hello
  } catch (error) {
    console.error(error);
  }
}
