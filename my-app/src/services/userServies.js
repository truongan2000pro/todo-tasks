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

export async function signIn(task) {
  try {
    let data = await axios.post(apiUrl + "/login", task);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function signUp(task) {
  try {
    let data = await axios.post(apiUrl + "/register", task);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateUser(id, task) {
  try {
    let data = await axios.put(apiUrl + "/" + id, task);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUser(id) {
  try {
    await axios.delete(apiUrl + "/" + id);
  } catch (error) {}
}
