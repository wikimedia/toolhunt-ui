import axios from 'axios'
const BASE_URL = 'http://localhost:8082'
export function getTasks() {
    return axios
    .get(BASE_URL + '/api/tasks', {raw:true})
    .then((response) => response.data)
}