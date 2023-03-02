import axios from 'axios'

const BASE_URL = 'http://localhost:8082'

export async function getTasks() {
    const res = await axios.get(BASE_URL + '/api/tasks', {raw:true})
    return res.data
}

export async function getLatestContributions() {
    const res = await axios.get(BASE_URL + '/api/contributions/?limit=5', {raw:true})
    return res.data
}

export async function getMyContributions(userName) {
    const res = await axios.get(BASE_URL + '/api/contributions/' + userName, {raw:true})
    return res.data
}

export async function getAllTimeGreat(lastThirtyDays=false) {
  const url = lastThirtyDays ? "/api/contributions/top-scores?since=30" : "/api/contributions/top-scores"
  const res = await axios.get(BASE_URL + url, {
    raw: true,
  });
  return res.data;
}

export async function getContributionsMetrics() {
  const res = await axios.get(BASE_URL + '/api/metrics/contributions', {raw:true})
    return res.data
}

export async function getToolsMetrics() {
  const res = await axios.get(BASE_URL + '/api/metrics/tools', {raw:true})
    return res.data
}

export async function getUserMetrics() {
  const res = await axios.get(BASE_URL + '/api/metrics/user', {raw:true})
    return res.data
}