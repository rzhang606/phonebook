import axios from 'axios'
const baseUrl = '/api/users'

const getUsers = () => {
    console.log("Retrieving users ...");
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

export default { getUsers };