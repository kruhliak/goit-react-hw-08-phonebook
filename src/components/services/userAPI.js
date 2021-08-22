import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// zxczxczxc
// zxczxczxc@mail.com
// zxczxczxc123123123

export async function userSignup(user) {
  const { data } = await axios.post(`/users/signup`, user);
  return data;
}

export async function userLogin(user) {
  const { data } = await axios.post(`/users/login`, user);
  return data;
}

export async function userLogout() {
  const { data } = await axios.post(`/users/logout`);
  return data;
}
