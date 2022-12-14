import axios from "axios";

const Url = "https://ivory-seagull-coat.cyclic.app/api";

export async function postRegisterUser({ name, username, email, password }) {
  try {
    response = await axios.post(`${Url}/users/register`, {
      name,
      username,
      email,
      password,
    });
    console.log("response", response.status);
    return response;
  } catch (err) {
    console.log("catch error--", err.response.data);
    return err.response;
  }
}
export async function loginUser({ username, password }) {
  try {
    response = await axios.post(`${Url}/users/login`, {
      username,

      password,
    });
    console.log("response", response.status);
    return response;
  } catch (err) {
    console.log("catch error--", err.response.data);
    return err.response;
  }
}
