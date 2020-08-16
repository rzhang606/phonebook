import axios from 'axios'
const baseUrl = '/api/users'

const getUsers = () => {
    console.log("Retrieving users ...");
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

/**
 * 
 * @param {Object} userObject 
 * Fields: name, username, password
 */
const addUser = async (userObject) => {
    console.log("Adding new user: ", userObject.name);
    const response = await axios.post(baseUrl, userObject);
    return response.data;
}

export default { getUsers, addUser };