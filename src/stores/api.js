import axios from 'axios'

const BASE_URL = 'http://localhost:8082'

export async function getTasks() {
    const res = await axios.get(BASE_URL + '/api/tasks', {raw:true})
    return res.data
}

export async function getLatestContributions() {
    const res = await axios.get(BASE_URL + '/api/contributions/latest', {raw:true})
    return res.data
}

export async function getMyContributions(userName) {
    const res = await axios.get(BASE_URL + '/api/contributions/' + userName, {raw:true})
    return res.data
}