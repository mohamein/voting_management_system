/* eslint-disable no-unused-vars */
import ApiManager from '../ApiManage';

export const createUser = async (form) => {
  try {
    const resp = await ApiManager.post('/users/create', form, {
      withCredentials: true,
    });
    const data = await resp.data;

    console.log(data);
    return data;
  } catch (err) {
    console.log('Error occurred while creating a new user');
  }
};

export const loginUser = async (username, password) => {
  try {
    const user = await ApiManager.post('/users/login', {
      username,
      password,
    });
    const resp = await user.data;
    localStorage.setItem('token', JSON.stringify(resp.token));
    localStorage.setItem('user', JSON.stringify(resp.user));

    console.log(resp.message);
    return resp;
  } catch (err) {
    console.log('Error occurred while login user', err.message);
  }
};

export const getUsers = async () => {
  try {
    const users = await ApiManager.get('/users/');
    console.log(users);
    return users;
  } catch (err) {
    console.log('Error occurred while getting users', err.message);
  }
};
