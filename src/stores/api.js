import axios from "axios";

const BASE_URL = "http://localhost:8082";

export async function getTasks() {
  const res = await axios.get(BASE_URL + "/api/tasks", { raw: true });
  return res.data;
}

export async function getLatestContributions() {
  const res = await axios.get(BASE_URL + "/api/contributions/?limit=5", {
    raw: true,
  });
  return res.data;
}

export async function getMyContributions(userName) {
  const res = await axios.get(BASE_URL + "/api/contributions/" + userName, {
    raw: true,
  });
  return res.data;
}

export async function getAllTimeGreat() {
  const res = await axios.get(BASE_URL + "/api/contributions/top-scores", {
    raw: true,
  });
  return res.data;
}

export async function getLoggedInUser() {
  const res = await axios
    .get(BASE_URL + "/api/user", { raw: true })
    .catch(function (error) {
      if (error.response.status == 401) {
        localStorage.setItem("currentUser", null);
      }
    });

  console.log(`What the data: ${res.data.username}`);
  const username = res.data["username"];
  localStorage.setItem("currentUser", username);
}

export async function isUserLoggedIn() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    return currentUser;
  }
  return;
}
