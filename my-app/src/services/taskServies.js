import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";
export async function getTasks() {
  try {
    let data = await axios.get(apiUrl);

    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addTask(task) {
  try {
    let data = await axios.post(apiUrl, task);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTask(id, task) {
  try {
    let data = await axios.put(apiUrl + "/" + id, task);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteTask(id) {
  try {
    await axios.delete(apiUrl + "/" + id);
  } catch (error) {}
}
