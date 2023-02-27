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

export async function getAllTimeGreat(lastThirtyDays=false) {
  const url = lastThirtyDays ? "/api/contributions/top-scores?since=30" : "/api/contributions/top-scores"
  const res = await axios.get(BASE_URL + url, {
    raw: true,
  });
  return res.data;
}

export async function getLoggedInUser() {
  try {
    const res = await axios.get(BASE_URL + "/api/user", { raw: true });
    const username = res.data["username"];
    localStorage.setItem("currentUser", username);
  } catch (error) {
    console.log(error);
  }
}

export async function isUserLoggedIn() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    return currentUser;
  }
  return;
}

export async function LogIn() {
  if (!localStorage.getItem("currentUser")) {
    await getLoggedInUser();
  }

  if (!localStorage.getItem("currentUser")) {
    window.open("http://localhost:8082/api/login");
  }

  location.reload();
}

export function LogOut() {
  localStorage.removeItem("currentUser");
  location.reload();
}