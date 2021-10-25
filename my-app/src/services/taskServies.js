import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";
export async function getTasks(token) {
  try {
    let data = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token, //the token is a variable which holds the token
      },
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addTask(task, token) {
  try {
    let data = await axios.post(apiUrl, task, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token, //the token is a variable which holds the token
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTask(id, task, token) {
  try {
    let data = await axios.put(apiUrl + "/" + id, task, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token, //the token is a variable which holds the token
      },
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteTask(id, token) {
  try {
    await axios.delete(apiUrl + "/" + id, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token, //the token is a variable which holds the token
      },
    });
  } catch (error) {}
}
