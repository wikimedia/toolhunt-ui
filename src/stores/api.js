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

export async function recordUserContribution(taskId, contributionRecord) {
  const res = await axios.put(
    BASE_URL + "/api/tasks/" + taskId,
    contributionRecord
  );
  return res.data;
}
