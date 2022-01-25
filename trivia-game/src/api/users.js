import { BASE_URL } from ".";
import { API_KEY } from ".";

export async function apiUserRegister(username) {
  try {
    let response = await fetch(`${BASE_URL}/trivia`);
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].username === username) {
        return [null, data[i]];
      }
    }
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
    response = await fetch(`${BASE_URL}/trivia`, config);
    data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, null];
  }
}

export async function apiUserLogin(username) {
  try {
    const response = await fetch(`${BASE_URL}/trivia`);
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].username === username) {
        return [null, data[i]];
      }
    }
    return;
  } catch (error) {
    console.log(error);
  }
}
