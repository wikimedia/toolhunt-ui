import axios from 'axios'

const BASE_URL = 'http://localhost:8082'

export function getTasks() {
    axios
    .get(BASE_URL + '/api/tasks', {raw:true})
    .then((response) => {
        const tasks = response.data
            console.log(tasks)
    }).catch((e) => console.log(e))
}
