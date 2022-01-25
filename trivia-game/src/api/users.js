import { BASE_URL } from ".";
import { API_KEY } from ".";

export async function apiUserRegister(username) {
  try {
    const config = {
      method: "POST",
      headers: {
        "X-API-Key": API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        highScore: 0,
      }),
    };
    const response = await fetch(`${BASE_URL}/trivia`, config);
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, null];
  }
}

export async function checkUsername(username){
  try {
    const config = {
      method = "GET"
    }
    const response = await fetch(`${BASE_URL}/trivia`, config)
  }
}
