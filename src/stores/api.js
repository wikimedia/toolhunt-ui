import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getTasks() {
  const res = await axios.get(BASE_URL + "/api/tasks", {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}

export async function getTasksByToolName(toolName) {
  const res = await axios.get(BASE_URL + `/api/tasks/tool/${toolName}`, {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}

export async function getToolList() {
  const res = await axios.get(BASE_URL + "/api/tools/names", {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}

export async function getLatestContributions() {
  const res = await axios.get(BASE_URL + "/api/contributions/?limit=5", {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}

export async function getMyContributions(userName) {
  const res = await axios.get(BASE_URL + "/api/contributions/" + userName, {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}

export async function getAllTimeGreat(lastThirtyDays = false) {
  const url = lastThirtyDays
    ? "/api/contributions/top-scores?since=30"
    : "/api/contributions/top-scores";
  const res = await axios.get(BASE_URL + url, {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}

export async function recordUserContribution(taskId, contributionRecord) {
  let response = await axios.put(
    BASE_URL + "/api/tasks/" + taskId,
    contributionRecord
  );
  return response;
}

export async function getLoggedInUser() {
  try {
    let response = await axios.get(BASE_URL + "/api/user", {
      raw: true,
      timeout: 10000,
    });
    if (response.data["username"]) {
      return response.data["username"];
    } else return;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getContributionsMetrics() {
  const res = await axios.get(BASE_URL + "/api/metrics/contributions", {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}

export async function getToolsMetrics() {
  const res = await axios.get(BASE_URL + "/api/metrics/tools", {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}

export async function getUserMetrics() {
  const res = await axios.get(BASE_URL + "/api/metrics/user", {
    raw: true,
    timeout: 10000,
  });
  return res.data;
}
