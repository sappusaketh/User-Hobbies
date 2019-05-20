import Axios from 'axios';
const url = 'http://localhost:5000';

export async function addUser(username, hobbies, avatar) {
  const fd = new FormData(); //use formdata for multipart upload
  fd.append('username', username);
  fd.append('hobbies', hobbies);
  fd.append('avatar', avatar);
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  try {
    let response = await Axios.post(`${url}/user/adduser`, fd, config);
    return response.data;
    // console.log(data);
  } catch (error) {
    return error;
    // console.error(error.response.data);
  }
}

export async function getAllUsers() {
  try {
    let users = await Axios.get(`${url}/user/allusers`);
    return users.data;
  } catch (error) {
    return error;
  }
}

// getAllUsers().then(response => console.log(response));
