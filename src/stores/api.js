import axios from 'axios'

const BASE_URL = 'http://localhost:8082'

export async function getTasks() {
    const res = await axios.get(BASE_URL + '/api/tasks', {raw:true})
    return res.data
}