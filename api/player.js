// Require axios
import axios from 'axios'

export default getPlayers;

async function getPlayers() {
  const requestHeaders = {
    'Content-Type': 'application/json',
    // origin: 'http://localhost:5173',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
    Accept: 'application/json',
  };

  let response;
  try {
    response = await axios({
      url: 'http://127.0.0.1:5243/api/Player/',
      method: 'get',
      headers: requestHeaders,
    });
  } catch (error) {
    response = error.response;
  }
  console.log(response);

  return response;
}
