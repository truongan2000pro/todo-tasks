import axios from "axios";
const apiUrl = "http://localhost:8080/api/users";
export async function getUsers() {
  try {
    let data = await axios.get(apiUrl);

    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function signIn(userInput) {
  try {
    let data = await axios.post(apiUrl + "/login", userInput);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function signUp(userInput) {
  try {
    let data = await axios.post(apiUrl + "/register", userInput);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateUser(id, userInput) {
  try {
    let data = await axios.put(apiUrl + "/" + id, userInput);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUser(userInput) {
  try {
    await axios.delete(apiUrl + "/" + userInput);
  } catch {}
}
